import MintToken from "../components/MintToken";
import TokenBalance from "../components/TokenBalance";
import TransferOwnership from "../components/TransferOwnership";
import { Flex, Heading } from "@raidguild/design-system";
import type { NextPage } from "next";

const ERC20: NextPage = () => {
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
        <MintToken />
        <TokenBalance />
      </Flex>
    </>
  );
};

export default ERC20;
