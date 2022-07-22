import { useNFTMetaData } from "../../../hooks/erc721";
import {
  Text,
  Heading,
  Card,
  Avatar,
  HStack,
  Flex,
} from "@raidguild/design-system";

const ViewNFT: React.FC = () => {
  const { metadata, nftUri } = useNFTMetaData(0);

  return (
    <>
      <Card
        minW={"300"}
        boxSize={"xs"}
        heading={
          <Heading w={"100%"} variant="noShadow">
            NFT Metadata
          </Heading>
        }
        variant="withHeader"
        bg="whiteAlpha.200"
      >
        {metadata ? (
          <>
            <Text size="lg" textAlign={"center"}>
              {`Review NFT with ID ${metadata.tokenId}`}
            </Text>
            <HStack>
              <Avatar name={metadata.name} src={nftUri} />
              <Heading size="sm">{metadata.name}</Heading>
            </HStack>
            <Flex gap={"1em"} flexWrap="wrap" justifyContent={"space-evenly"}>
              {Object.keys(metadata.attributes).map((key, index) => (
                <Text
                  w="40%"
                  key={index}
                  bg="gray.600"
                  p="1"
                  border={"1"}
                  borderRadius={"5"}
                >{`${metadata.attributes[key].trait_type}: ${metadata.attributes[key].value}`}</Text>
              ))}
            </Flex>
          </>
        ) : (
          <Text>No NFT found</Text>
        )}
      </Card>
    </>
  );
};

export default ViewNFT;
