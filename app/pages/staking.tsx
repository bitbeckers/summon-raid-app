import AllStakes from "../components/Staking/AllStakes";
import Approve from "../components/ERC20/Approve";
import ClaimRewards from "../components/Staking/ClaimRewards";
import DepositStake from "../components/Staking/DepositStake";
import StakeOverview from "../components/Staking/StakeOverview";
import WithdrawStake from "../components/Staking/WithdrawStake";
import { Flex, Stack, Heading } from "@raidguild/design-system";
import type { NextPage } from "next";

const ERC721: NextPage = () => {
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
        <Approve />
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
