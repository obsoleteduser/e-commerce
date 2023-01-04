import { Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { Description } from './Description'
import { Showcase } from './Showcase'

export const Main = () => {
  return (
    <Flex p={["0","0","5rem"]} gap={["1rem","1rem","0"]} direction={["column","column","row"]}>
        <Showcase></Showcase>
        <Description></Description>
    </Flex>
  )
}
