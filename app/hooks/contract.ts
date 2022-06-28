import { NFTMetaData } from "../types/global";
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
import { useEffect, useState } from "react";

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
  const { mutate: transferTokenTo } = useWriteContract(token, "transfer");

  const { response: owner } = useReadContract(token, "owner", []);

  const balance = useTokenBalance(token, address || "", 2000);

  return {
    balance: balance?.toString(),
    mintTokens,
    transferOwnership,
    transferTokenTo,
    owner,
  };
};

export const useNFTs = () => {
  const { address } = useWallet();
  const { contract: nft } = useNFTContract();
  const { mutate: mint } = useWriteContract(nft, "safeMint");
  const { response: owner } = useReadContract(nft, "owner", []);
  const balance = useTokenBalance(nft, address || "", 2000);

  return { mint, owner, balance };
};

interface MetaData {
  tokenId: number;
  name: string;
  image: string;
  attributes: { [key: string]: any };
}

export const useNFTMetaData = (tokenID: string | number) => {
  const { contract: nft } = useNFTContract();
  const [nftUri, setNftUri] = useState<string>();
  const [metadata, setMetadata] = useState<MetaData>();

  const { response: tokenURI } = useReadContract(nft, "tokenURI", [tokenID]);

  const parseUri = (uri: string) =>
    uri.replace("ipfs://", `https://ipfs.io/ipfs/`);

  const metadataUri = tokenURI !== undefined ? parseUri(tokenURI) : "";

  useEffect(() => {
    const fetchImage = async () => {
      if (metadataUri) {
        const response = await fetch(metadataUri);
        try {
          const json = (await response.json()) as MetaData;
          const imageUri = parseUri(json.image);
          setMetadata(json);
          setNftUri(imageUri);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchImage();
    // fetch metadata from the metadata uri to get the image url
  }, [metadataUri]);

  return { metadata, nftUri };
};

export const onError = (error: any) => {
  toast.notify(error?.data?.message || error.message, {
    status: "error",
  });
};
