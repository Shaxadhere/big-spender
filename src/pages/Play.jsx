import React, { useMemo } from "react";
import { useParams } from "react-router";
import { RICH } from "../constants/rich";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import InfoCard from "../components/cards/InfoCard";
import { WHIP } from "../constants/whip";
import WhipCard from "../components/cards/WhipCard";

const Play = () => {
  const { id } = useParams();
  const rich = useMemo(
    () => RICH.find((item, index) => index === parseInt(id)),
    [id]
  );
  return (
    <VStack align={"stretch"}>
      <InfoCard data={rich} />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {WHIP.map((item, index) => (
          <WhipCard key={index} product={{ ...item, id: index }} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Play;
