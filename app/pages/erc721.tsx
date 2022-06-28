import {
  Flex,
  Stack,
  Text,
  Heading,
  Card,
  RoleBadge,
} from "@raidguild/design-system";
import type { NextPage } from "next";

const ERC721: NextPage = () => {
  return (
    <>
      <Flex direction="column" justify="space-between" h="80vh" w="100%">
        <Stack align="center" spacing="5vh">
          <Heading size="3xl">Basic ERC721 interactions</Heading>
        </Stack>
      </Flex>
    </>
  );
};

export default ERC721;
