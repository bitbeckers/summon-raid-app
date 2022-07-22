import {
  ERC20_Token,
  ERC20_Token__factory,
} from "../types/typechain";
import { contractAddresses } from "../utils/constants";
import { useToast } from "@raidguild/design-system";
import {
  parseTxErrorMessage,
  useReadContract,
  useTokenBalance,
  useTypedContract,
  useWallet,
  useWriteContract,
} from "@raidguild/quiver";
import _ from "lodash";

const useTokenContract = () =>
  useTypedContract<ERC20_Token>(
    contractAddresses.erc20TokenAddress,
    ERC20_Token__factory
  );

export const useToken = () => {
  const toast = useToast();
  const { address } = useWallet();
  const { contract: token } = useTokenContract();
  const { mutate: approve } = useWriteContract(token, "approve", {
    onError: (e) => {
      toast({
        title: `Couldn't approve token allowance: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Approving`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "Allowance set",
        status: "success",
      });
    },
  });

  const { mutate: mintTokens } = useWriteContract(token, "mint", {
    onError: (e) => {
      toast({
        title: `Couldn't mint tokens: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Minting tokens`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "Tokens minted",
        status: "success",
      });
    },
  });

  const { mutate: transferOwnership } = useWriteContract(
    token,
    "transferOwnership",
    {
      onError: (e) => {
        toast({
          title: `Couldn't transfer ownership: ${parseTxErrorMessage(e)}`,
          status: "error",
        });
        throw new Error(e.message);
      },
      onResponse: () => {
        toast({
          title: `Transfering ownership`,
          status: "info",
          duration: 30000,
        });
      },
      onConfirmation: () => {
        toast({
          title: "Ownership transfered",
          status: "success",
        });
      },
    }
  );
  const { mutate: transferTokenTo } = useWriteContract(token, "transfer", {
    onError: (e) => {
      toast({
        title: `Couldn't transfer tokens: ${parseTxErrorMessage(e)}`,
        status: "error",
      });
      throw new Error(e.message);
    },
    onResponse: () => {
      toast({
        title: `Transfering tokens`,
        status: "info",
        duration: 30000,
      });
    },
    onConfirmation: () => {
      toast({
        title: "Tokens transfered",
        status: "success",
      });
    },
  });

  const { response: owner } = useReadContract(token, "owner", []);

  const balance = useTokenBalance(token, address || "", 2000);

  return {
    balance: balance?.toString(),
    approve,
    mintTokens,
    transferOwnership,
    transferTokenTo,
    owner,
    token,
  };
};
