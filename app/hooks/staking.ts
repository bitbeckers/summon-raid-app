import { Staking_Pool, Staking_Pool__factory } from "../types/typechain";
import { contractAddresses } from "../utils/constants";
import { useToast } from "@raidguild/design-system";
import {
  parseTxErrorMessage,
  useReadContract,
  useTypedContract,
  useWallet,
  useWriteContract,
} from "@raidguild/quiver";
import _ from "lodash";

const useStakingPoolContract = () =>
  useTypedContract<Staking_Pool>(
    contractAddresses.stakingPoolAddress,
    Staking_Pool__factory
  );

export const useStaking = () => {
  const toast = useToast();
  const { address } = useWallet();
  const { contract: staking } = useStakingPoolContract();
  const { mutate: stake } = useWriteContract(staking, "stake", {
    onError: (e) => {
      toast({
        title: `Couldn't stake: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Staking`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "Staking success",
        status: "success",
      });
    },
  });
  const { mutate: withdraw } = useWriteContract(staking, "withdraw", {
    onError: (e) => {
      toast({
        title: `Couldn't withdraw stake: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Withdrawing stake`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "Stake withdrawn",
        status: "success",
      });
    },
  });
  const { mutate: claimRewards } = useWriteContract(staking, "claimRewards", {
    onError: (e) => {
      toast({
        title: `Couldn't claim rewards: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Claiming rewards`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "Rewards claimed",
        status: "success",
      });
    },
  });

  const { response: stakedBalance } = useReadContract(
    staking,
    "getStakedBalance",
    [address || ""]
  );

  const { response: stakeRewards } = useReadContract(
    staking,
    "getStakingReward",
    [address || ""]
  );

  return {
    stake,
    withdraw,
    claimRewards,
    stakedBalance,
    stakeRewards,
    staking,
  };
};