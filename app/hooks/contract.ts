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
import TokenJSON from "../../evm/deployments/localhost/ERC20_Token.json";
import NFTJSON from "../../evm/deployments/localhost/ERC721_NFT.json";

const useTokenContract = () =>
  useTypedContract<ERC20_Token>(TokenJSON.address, ERC20_Token__factory);

const useNFTContract = () =>
  useTypedContract<ERC721_NFT>(NFTJSON.address, ERC721_NFT__factory);

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
