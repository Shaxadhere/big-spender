import React from "react";
import { Box, Flex, Text, Image, VStack, Divider } from "@chakra-ui/react";

const InfoCard = ({ data }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={5}
     bg="#1b1c1f"
      borderRadius="md"
      boxShadow="md"
      color="white"
      maxW="full"
    >
      <Image
        src={data.pictureUrl}
        alt={data.name}
        borderRadius="md"
        boxSize={{ base: "100%", md: "400px" }}
        objectFit="cover"
      />
      <VStack spacing={4} align="start" p={5} flex="1" justify="center">
        <Text fontSize="2xl" fontWeight="bold">
          {data.name}
        </Text>
        <Text fontSize="lg" color="gray.400">
          {data.shortDescription}
        </Text>
        <Divider />
        <Text fontSize="4xl" fontWeight="bold" color="teal.300">
          Net Worth: {data.netWorth.formatted}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Industry: {data.industry}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Country: {data.country}
        </Text>
      </VStack>
    </Flex>
  );
};

export default InfoCard;
