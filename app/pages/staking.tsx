import Approve from "../components/ERC20/Approve";
import {
  AllStakes,
  ClaimRewards,
  DepositStake,
  StakeOverview,
  WithdrawStake,
} from "../components/Staking";
import { useStaking } from "../hooks/staking";
import { Flex, Stack, Heading, Text } from "@raidguild/design-system";
import type { NextPage } from "next";

const ERC721: NextPage = () => {
  const { staking } = useStaking();
  return (
    <Stack dir="column" w="100%" justify={"center"} align="center">
      <Heading size="3xl">Basic staking pool interactions</Heading>
      <Flex
        gap={"1em"}
        wrap={"wrap"}
        direction={"row"}
        w="70%"
        align="center"
        justify={"center"}
      >
        {staking?.address ? (
          <Approve contractAddress={staking?.address} />
        ) : (
          <Text>No staking contract(address) found</Text>
        )}
        <DepositStake />
        <StakeOverview />
        <WithdrawStake />
        <ClaimRewards />
        <AllStakes />
      </Flex>
    </Stack>
  );
};

export default ERC721;
