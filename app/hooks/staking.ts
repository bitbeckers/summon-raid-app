import {
  ERC20_Token,
  ERC20_Token__factory,
  ERC721_NFT,
  ERC721_NFT__factory,
  Staking_Pool,
  Staking_Pool__factory,
} from "../types/typechain";
import { contractAddresses } from "../utils/constants";
import { toast } from "@chakra-ui/react";
import {
  useReadContract,
  useTokenBalance,
  useTypedContract,
  useWallet,
  useWriteContract,
} from "@raidguild/quiver";
import _ from "lodash";
import { useEffect, useState } from "react";

const useStakingPoolContract = () =>
  useTypedContract<Staking_Pool>(
    contractAddresses.stakingPoolAddress,
    Staking_Pool__factory
  );

export const useStaking = () => {
  const { address } = useWallet();
  const { contract: staking } = useStakingPoolContract();
  const { mutate: stake } = useWriteContract(staking, "stake");
  const { mutate: withdraw } = useWriteContract(staking, "withdraw");
  const { mutate: claimRewards } = useWriteContract(staking, "claimRewards");

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



export const onError = (error: any) => {
  toast.notify(error?.data?.message || error.message, {
    status: "error",
  });
};
