import { useStaking  } from "../../../hooks/staking";
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
import { ethers } from "ethers";
import { Formik, Form } from "formik";

interface Values {
  amount: string;
}

const DepositStake: React.FC = () => {
  const { stake } = useStaking();

  const onStake = async (values: Values) => {
    console.log("values: ", values);
    if (values.amount) {
      await stake(ethers.utils.parseEther(values.amount));
    }
  };

  return (
    <>
      <Card
        minW={"300"}
        boxSize={"xs"}
        heading={
          <Heading w={"100%"} variant="noShadow">
            Deposit
          </Heading>
        }
        variant="withHeader"
        bg="whiteAlpha.200"
      >
        <Text size="lg" textAlign={"center"}>
          Put your funds in a staking pool
        </Text>
        <Formik
          enableReinitialize
          initialValues={{ amount: "0" }}
          onSubmit={async (values: Values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              onStake(values);
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
                STAKE
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default DepositStake;
