import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Box>
      <Flex
        w="full"
        as="header"
        bg="#101216"
        py={4}
        px={6}
        textAlign="center"
        justify={"center"}
      >
        <Text textAlign={"center"} fontSize="2xl" fontWeight="bold">
          Big Spender
        </Text>
      </Flex>
      <Box p="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
