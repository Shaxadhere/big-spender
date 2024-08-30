import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";

const WhipCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} ${product.name} added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex
      p={3}
      bg="#1b1c1f"
      borderRadius="md"
      boxShadow="md"
      color="white"
      maxW="full"
      mx="auto"
    >
      <Image
        src={product.pictureUrl}
        alt={product.name}
        borderRadius="md"
        boxSize="100%"
        objectFit="cover"
      />
      <VStack spacing={3} align="start" p={3}>
        <Text fontSize="lg" fontWeight="bold">
          {product.name}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="teal.300">
          ${product.price.toLocaleString()}
        </Text>
        <Box>
          <Text fontSize="sm" mb={2}>
            Quantity:
          </Text>
          <NumberInput
            defaultValue={1}
            min={1}
            max={100}
            value={quantity}
            onChange={(value) => setQuantity(parseInt(value))}
            size="sm"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Button colorScheme="teal" size="sm" onClick={handleAddToCart} mt={2}>
          Add to Cart
        </Button>
      </VStack>
    </Flex>
  );
};

export default WhipCard;
