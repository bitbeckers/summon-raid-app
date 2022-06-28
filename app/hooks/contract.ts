import { toast } from "@chakra-ui/react";
import {
  useReadContract,
  useTokenBalance,
  useTypedContract,
  useWriteContract,
} from "@raidguild/quiver";
import { Contract } from "ethers";

import _ from "lodash";
import {
  ERC20_Token,
  ERC20_Token__factory,
  ERC721_NFT,
  ERC721_NFT__factory,
} from "../types/typechain";
import { contractAddresses } from "../utils/constants";

const useTokenContract = () =>
  useTypedContract<ERC20_Token>(contractAddresses.erc20TokenAddress, ERC20_Token__factory);

const useNFTContract = () =>
  useTypedContract<ERC721_NFT>(contractAddresses.erc721NFTAddress, ERC721_NFT__factory);

export const useToken = () => {
  const { contract: token } = useTokenContract();
  const { mutate: mintTokens } = useWriteContract(token, "mint");
  const { response: owner } = useReadContract(token, "owner", []);

  const balance = useTokenBalance(token as Contract);

  return {
    balance: balance?.toString(),
    mintTokens,
    owner,
  };
};

export const onError = (error: any) => {
  toast.notify(error?.data?.message || error.message, {
    status: "error",
  });
};
