import { useToken } from "../../../hooks/erc20";
import {
  Text,
  Heading,
  Card,
  Button,
  Input,
  FormControl,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@raidguild/design-system";
import { useWallet } from "@raidguild/quiver";
import { ethers } from "ethers";
import { Formik, Form } from "formik";

interface Values {
  recipient: string;
  amount: string;
}

const MintToken: React.FC = () => {
  const { address } = useWallet();
  const { mintTokens, owner } = useToken();

  const onMint = async (values: Values) => {
    console.log("values: ", values);
    if (
      values.amount &&
      values.recipient &&
      ethers.utils.isAddress(values.recipient) &&
      address === owner
    ) {
      console.log("minting toknes: ", values.amount);
      await mintTokens(
        values.recipient,
        ethers.utils.parseEther(values.amount)
      );
    }
  };

  return (
    <>
      <Card
        minW={"300"}
        boxSize={"xs"}
        heading={
          <Heading w={"100%"} variant="noShadow">
            Mint tokens
          </Heading>
        }
        variant="withHeader"
        bg="whiteAlpha.200"
      >
        <Text size="lg" textAlign={"center"}>
          The owner of a contract can mint tokens
        </Text>
        <Formik
          enableReinitialize
          initialValues={{ recipient: "", amount: "0" }}
          onSubmit={async (values: Values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              onMint(values);
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
              <FormControl id="newOwner">
                <Input
                  variant={"outline"}
                  value={values.recipient}
                  label="Recipient"
                  name="recipient"
                  placeholder="Provide token recipient address"
                  onChange={(e: any) =>
                    setFieldValue("recipient", e.target.value)
                  }
                />
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
                MINT
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default MintToken;
