import { useNFTs } from "../../../hooks/erc721";
import {
  Text,
  Heading,
  Card,
  Button,
  Input,
  FormControl,
} from "@raidguild/design-system";
import { useWallet } from "@raidguild/quiver";
import { ethers } from "ethers";
import { Formik, Form } from "formik";

interface Values {
  recipient: string;
  tokenID: string;
}

const MintNFT: React.FC = () => {
  const { address } = useWallet();
  const { mint, owner } = useNFTs();

  const onMint = async (values: Values) => {
    console.log("values: ", values);
    if (
      values.tokenID &&
      values.recipient &&
      ethers.utils.isAddress(values.recipient) &&
      address === owner
    ) {
      console.log("minting token: ", values.tokenID);
      await mint(values.recipient, values.tokenID, `${values.tokenID}.json`);
    }
  };

  return (
    <>
      <Card
        minW={"300"}
        boxSize={"xs"}
        heading={
          <Heading w={"100%"} variant="noShadow">
            Mint NFT
          </Heading>
        }
        variant="withHeader"
        bg="whiteAlpha.200"
      >
        <Text size="lg" textAlign={"center"}>
          The owner of a contract can mint
        </Text>
        <Formik
          enableReinitialize
          initialValues={{ recipient: "", tokenID: "0" }}
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
                <Input
                  variant={"outline"}
                  value={values.recipient}
                  label="Token ID"
                  name="tokenID"
                  placeholder="Provide token ID"
                  onChange={(e: any) =>
                    setFieldValue("tokenID", e.target.value)
                  }
                />
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

export default MintNFT;
