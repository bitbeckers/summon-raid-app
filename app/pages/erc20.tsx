import {
  Flex,
  Stack,
  Text,
  Heading,
  Card,
  RoleBadge,
  Button,
  Center,
  Spacer,
  Divider,
} from "@raidguild/design-system";
import { formatAddress, useWallet } from "@raidguild/quiver";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { RoleCards } from "../components/RoleCards";
import { useToken } from "../hooks/contract";

const ERC20: NextPage = () => {
  const { address } = useWallet();
  const { balance, mintTokens, owner } = useToken();

  const handleMint = async () => {
    await mintTokens(address || "", ethers.utils.parseEther("10"));
  };

  console.log("balance: ", balance);
  console.log("owner: ", owner);

  return (
    <>
      <Flex direction="column" justify="space-between" h="80vh" w="100%">
        <Stack align="center" spacing="5vh">
          <Heading size="3xl">Basic ERC20 interactions</Heading>
          <Center w="70%" justifyContent={"space-around"}>
            <Card
              boxSize={"xs"}
              heading={
                <Heading w={"100%"} variant="noShadow" textAlign={"center"}>
                  Owner
                </Heading>
              }
              variant="withHeader"
              bg="whiteAlpha.200"
            >
              <Text size="4xl">{formatAddress(owner)}</Text>

              <Button onClick={handleMint}>TRANSFER OWNERSHIP</Button>
            </Card>
            <Card
              boxSize={"xs"}
              heading={
                <Heading w={"100%"} variant="noShadow">
                  Mint tokens
                </Heading>
              }
              variant="withHeader"
              bg="whiteAlpha.200"
            >
              <Text textAlign={"center"}>
                The owner of a contract can mint tokens
              </Text>
              <Button onClick={handleMint}>MINT</Button>
            </Card>

            <Card
              boxSize={"xs"}
              heading={
                <Heading w={"100%"} variant="noShadow" textAlign={"center"}>
                  Balance
                </Heading>
              }
              variant="withHeader"
              bg="whiteAlpha.200"
            >
              <Text>{balance}</Text>
            </Card>
          </Center>
        </Stack>
      </Flex>
    </>
  );
};

export default ERC20;
