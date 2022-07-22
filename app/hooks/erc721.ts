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
  parseTxErrorMessage,
  useReadContract,
  useTokenBalance,
  useTypedContract,
  useWallet,
  useWriteContract,
} from "@raidguild/quiver";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useToast } from "@raidguild/design-system";

const useNFTContract = () =>
  useTypedContract<ERC721_NFT>(
    contractAddresses.erc721NFTAddress,
    ERC721_NFT__factory
  );

export const useNFTs = () => {
  const toast = useToast();
  const { address } = useWallet();
  const { contract: nft } = useNFTContract();
  const { mutate: mint } = useWriteContract(nft, "safeMint", {
    onError: (e) => {
      toast({
        title: `Couldn't mint NFT: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Minting NFT`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "NFT minted",
        status: "success",
      });
    },
  });
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