import ConnectWallet from "../ConnectWallet";
import { RoleCard } from "../RoleCard";
import {
  Stack,
  Heading,
  HStack,
  Link,
  Spacer,
  Card,
  RoleBadge,
  Text,
} from "@raidguild/design-system";
import NextLink from "next/link";
import { JourneyCard } from "../JourneyCard";

const JourneyCards: React.FC<{}> = () => {
  const cards = [
    { title: "ERC20", content: "Play with ERC20", target: "/erc20" },
    { title: "NFT", content: "Play with NFT", target: "/erc721" },
  ];
  return (
    <Stack
      direction={["column", "column", "row"]}
      as="nav"
      w="80%"
      justify="space-around"
      align="center"
      spacing={"3em"}
    >
      {cards.map((card, index) => (
        <JourneyCard {...card} key={index} />
      ))}
    </Stack>
  );
};

export { JourneyCards };
