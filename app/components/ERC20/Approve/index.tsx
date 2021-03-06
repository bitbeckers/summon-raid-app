import { useToken } from "../../../hooks/erc20";
import {
  Text,
  Heading,
  Card,
  Button,
  FormControl,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@raidguild/design-system";
import { useReadContract, useWallet } from "@raidguild/quiver";
import { Contract, ethers } from "ethers";
import { Formik, Form } from "formik";

interface Values {
  amount: string;
}

const Approve: React.FC<{ contractAddress: string }> = ({
  contractAddress,
}) => {
  const { address } = useWallet();
  const { approve, token } = useToken();

  const { response: allowance } = useReadContract(token, "allowance", [
    address || "",
    contractAddress || "",
  ]);

  const onApprove = async (values: Values) => {
    console.log("values: ", values);
    if (values.amount && contractAddress && address) {
      await approve(contractAddress, ethers.utils.parseEther(values.amount));
    }
  };

  return (
    <>
      <Card
        minW={"300"}
        boxSize={"xs"}
        heading={
          <Heading w={"100%"} variant="noShadow">
            Approve
          </Heading>
        }
        variant="withHeader"
        bg="whiteAlpha.200"
      >
        <Text size="lg" textAlign={"center"}>
          Approve staking contract access to your tokens
        </Text>
        <Text size="lg" textAlign={"center"}>
          {`Current allowance: ${
            allowance ? ethers.utils.formatEther(allowance) : "N/A"
          }`}
        </Text>
        <Formik
          enableReinitialize
          initialValues={{ amount: "0" }}
          onSubmit={async (values: Values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              onApprove(values);
            } catch (err) {
              console.log(err);
            } finally {
              setSubmitting(false);
              resetForm();
            }
          }}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <Form>
              <FormControl id="stake">
                <NumberInput
                  value={values.amount}
                  color="white"
                  placeholder="Amount to wrap"
                  variant="outline"
                  onChange={(e) => {
                    setFieldValue("amount", e);
                  }}
                  min={0}
                >
                  <NumberInputField name="amount" borderRadius="none" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button
                variant="solid"
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
                width="100%"
              >
                ALLOW
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Approve;
