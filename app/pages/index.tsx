import { JourneyCards } from "../components/JourneyCards";
import { Flex, Stack, Heading, Divider } from "@raidguild/design-system";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Flex direction="column" justify="space-between" h="80vh" w="100%">
        <Stack align="center" spacing="5vh">
          <Heading size="3xl">Raid Guild App Starter</Heading>
          <JourneyCards />
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
