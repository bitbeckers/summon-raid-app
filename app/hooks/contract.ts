import {
  ERC20_Token,
  ERC20_Token__factory,
  ERC721_NFT,
  ERC721_NFT__factory,
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
import { Contract } from "ethers";
import _ from "lodash";

const useTokenContract = () =>
  useTypedContract<ERC20_Token>(
    contractAddresses.erc20TokenAddress,
    ERC20_Token__factory
  );

const useNFTContract = () =>
  useTypedContract<ERC721_NFT>(
    contractAddresses.erc721NFTAddress,
    ERC721_NFT__factory
  );

export const useToken = () => {
  const { address } = useWallet();
  const { contract: token } = useTokenContract();
  const { mutate: mintTokens } = useWriteContract(token, "mint");
  const { mutate: transferOwnership } = useWriteContract(
    token,
    "transferOwnership"
  );
  const { mutate: transferTokenTo } = useWriteContract(
    token,
    "transfer"
  );

  const { response: owner } = useReadContract(token, "owner", []);

  const balance = useTokenBalance(token as Contract, address || "", 2000);

  return {
    balance: balance?.toString(),
    mintTokens,
    transferOwnership,
    transferTokenTo,
    owner,
  };
};

export const onError = (error: any) => {
  toast.notify(error?.data?.message || error.message, {
    status: "error",
  });
};
