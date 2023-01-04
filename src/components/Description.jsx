import { Box, Button, Flex, Heading, HStack, Text, Image } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext'

export const Description = () => {

    const {totalPrice, setTotalPrice, price, setPrice, number, setNumber} = useContext(GlobalContext)

    setTotalPrice(price*number)

  return (
    <Flex p={["0","0","4rem"]} overflow="hidden" boxSize="100%" gap="1rem" direction="column" align="start">
        <Text fontWeight="600" color="orange">SNEAKER COMPANY</Text>
        <Heading>Fall Limited</Heading>
        <Heading>Sneaksers</Heading>
        <Text color="gray.600" textAlign="left">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand the weather can offer.
        </Text>
        <HStack spacing="1rem" boxSize="100%">
        <Heading>{price}$</Heading>
        <Text color="orange" borderRadius=".5rem" padding=".5rem" backgroundColor="orange.100">50%</Text>
        </HStack>

        <Text color="gray.500" fontWeight="600">{totalPrice}$</Text>

        <HStack>
            
            <HStack spacing={0}>
            <Text onClick={()=>{setNumber(prev=> 
            ( prev-1<0 ? prev : prev - 1)
        )}} p=".5rem 1rem" color="orange" backgroundColor="gray.100" fontWeight="600" borderLeftRadius=".5rem">-</Text>
        <Text p=".5rem 1rem" backgroundColor="gray.100" fontWeight="600">{number}</Text>
        <Text onClick={()=>{setNumber(prev=> prev +1)}} p=".5rem 1rem" color="orange" backgroundColor="gray.100" fontWeight="600" borderRightRadius=".5rem">+</Text>
       
 
            </HStack>

             <Button p={["0 2rem","0 2rem","0 5em"]} spacing="5px" backgroundColor="orange" color="white">
                <Image fill="white" boxSize="1rem" m=".5%" src="src/assets/img/icon-cart-white.svg"></Image>
                <Text>  Add to cart</Text>
              </Button>
        </HStack>

    </Flex>
  )
}
