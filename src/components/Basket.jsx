import { Flex, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Basket = () => {
  return (
    <Flex ml={["0","0","50%"]} mt={["0","0","-20px"]} mr={[0,0,"50%"]} backgroundColor="white" borderRadius="10px" position="absolute" zIndex={1} w={["85%","85%","30rem"]} h="30%" border="1px solid #D3D3D3" direction="column" align="center">
        <Box textAlign="left" w="100%" borderBottom="1px solid #D3D3D3" p="1rem" fontWeight={600}>
            Cart
        </Box>
        <Flex h="100%" direction="column" justify="center">
            <Heading fontSize="xl">Your Card is empty</Heading>
        </Flex>
    </Flex>
  )
}
