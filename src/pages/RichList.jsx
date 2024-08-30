import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { RICH } from "../constants/rich";
import RichCard from "../components/cards/RichCard";

const RichList = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
      {RICH.map((item, index) => (
        <RichCard key={index} rich={{ ...item, id: index }} />
      ))}
    </SimpleGrid>
  );
};

export default RichList;
