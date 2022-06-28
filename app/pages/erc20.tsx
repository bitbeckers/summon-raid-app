import TransferOwnership from "../components/TransferOwnership";
import { useToken } from "../hooks/contract";
import {
  Flex,
  Text,
  Heading,
  Card,
  Button,
  Input,
  FormControl,
  FormLabel,
  Spacer,
  Divider,
} from "@raidguild/design-system";
import {  useWallet } from "@raidguild/quiver";
import { ethers } from "ethers";
import type { NextPage } from "next";

const ERC20: NextPage = () => {
  const { address } = useWallet();
  const { balance, mintTokens, transferOwnership, owner } = useToken();

  const handleMint = async () => {
    await mintTokens(address || "", ethers.utils.parseEther("10"));
  };

  console.log("balance: ", balance);
  console.log("owner: ", owner);

  return (
    <>
      <Heading size="3xl">Basic ERC20 interactions</Heading>
      <Flex
        gap={"1em"}
        wrap={"wrap"}
        direction={"row"}
        w="70%"
        align="center"
        justify={"center"}
      >
        <TransferOwnership />
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
          <Text textAlign={"center"}>
            The owner of a contract can mint tokens
          </Text>
          <Button onClick={handleMint}>MINT</Button>
        </Card>
        <Card
          minW={"300"}
          boxSize={"xs"}
          heading={
            <Heading w={"100%"} variant="noShadow" textAlign={"center"}>
              Balance
            </Heading>
          }
          variant="withHeader"
          bg="whiteAlpha.200"
        >
          <Text>{balance}</Text>
        </Card>
      </Flex>
    </>
  );
};

export default ERC20;
