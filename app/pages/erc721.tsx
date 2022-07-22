import { MintNFT, NFTBalance, ViewNFT } from "../components/ERC721"
import { Flex, Stack, Heading } from "@raidguild/design-system";
import type { NextPage } from "next";

const ERC721: NextPage = () => {
  return (
    <Stack dir="column" w="100%" justify={"center"} align="center">
      <Heading size="3xl">Basic ERC721 interactions</Heading>
      <Flex
        gap={"1em"}
        wrap={"wrap"}
        direction={"row"}
        w="70%"
        align="center"
        justify={"center"}
      >
        <MintNFT />
        <NFTBalance />
        <ViewNFT />
      </Flex>
    </Stack>
  );
};

export default ERC721;
