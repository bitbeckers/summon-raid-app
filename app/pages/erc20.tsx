import { MintToken, TokenBalance, TransferToken } from "../components/ERC20"
import TransferOwnership from "../components/TransferOwnership";
import { Flex, Heading, Stack } from "@raidguild/design-system";
import type { NextPage } from "next";

const ERC20: NextPage = () => {
  return (
    <Stack dir="column" w="100%" justify={"center"} align="center">
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
        <TransferToken />
      </Flex>
    </Stack>
  );
};

export default ERC20;
