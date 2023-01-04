import { Box, color, Flex, Heading, HStack, Link, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

export const Header = () => {

    const {setBasket, basket} = useContext(GlobalContext)

  return (
    <Flex gap="2rem" w={["10rem","10rem","100vw"]} h="8rem" align="center" borderBottom="1px solid #D3D3D3" >
        <Heading fontWeight="950">sneakers</Heading>
        <Flex display={["none","none","flex"]} gap="1rem" p="0" height="100%" spacing="2rem">
            <Link display="flex" justifyContent="center" alignItems="center" height="100%" _hover={{color: "black", borderBottom: "5px solid orange"}} padding="1rem 0">Collections</Link>
            <Link display="flex" justifyContent="center" alignItems="center"  height="100%" _hover={{color: "black", borderBottom: "5px solid orange"}} padding="1rem 0">Men</Link>
            <Link display="flex" justifyContent="center" alignItems="center"  height="100%" _hover={{color: "black", borderBottom: "5px solid orange"}} padding="1rem 0">Women</Link>
            <Link display="flex" justifyContent="center" alignItems="center"  height="100%" _hover={{color: "black", borderBottom: "5px solid orange"}} padding="1rem 0">About</Link>
            <Link display="flex" justifyContent="center" alignItems="center"  height="100%" _hover={{color: "black", borderBottom: "5px solid orange"}} padding="1rem 0">Contact</Link>
        </Flex>
        <Box w="30%"></Box>
        <HStack spacing="2rem">
            <Box cursor="pointer" onClick={()=>{setBasket(!basket)}} overflow="hidden" boxSize="3rem" display="flex" justifyContent="center" alignItems="center">
                <Image src="/src/assets/img/icon-cart.svg" alt="" />
            </Box>
            <Box borderRadius="50%" boxSize="3rem" border="1px solid orange" overflow="hidden">
                <Image src="/src/assets/img/image-avatar.png" alt="" />
            </Box>
        </HStack>
    </Flex>
  )
}
