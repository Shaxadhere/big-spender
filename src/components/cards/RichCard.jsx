import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RichCard = ({ rich }) => {
  return (
    <Box
      bg="#1b1c1f"
      cursor={"pointer"}
      p={4}
      borderRadius="md"
      boxShadow="lg"
      maxW="sm"
      borderWidth="1px"
      borderColor="#4A5568"
      transition={"all 0.3s ease"}
      _hover={{ borderColor: "#CBD5E0" }}
      as={Link}
      to={`/play/${rich.id}`}
    >
      <VStack spacing={4}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={rich.pictureUrl}
          alt={rich.name}
          objectFit={"cover"}
          objectPosition={"center"}
        />
        <Text fontSize="2xl" fontWeight="bold">
          {rich.name}
        </Text>
        <HStack spacing={1}>
          <Text fontSize="lg">Net Worth:</Text>
          <Text fontSize="lg" fontWeight="semibold">
            {rich.netWorth.formatted}
          </Text>
        </HStack>
        <Text fontSize="md" textAlign="center">
          {rich.shortDescription}
        </Text>
        <HStack spacing={1}>
          <Text fontSize="sm">Industry:</Text>
          <Text fontSize="sm" fontWeight="semibold">
            {rich.industry}
          </Text>
        </HStack>
        <HStack spacing={1}>
          <Text fontSize="sm">Country:</Text>
          <Text fontSize="sm" fontWeight="semibold">
            {rich.country}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default RichCard;
