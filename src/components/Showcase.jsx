import { HStack, Box, Flex, Image } from '@chakra-ui/react'
import { isMotionValue } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext'

export const Showcase = () => {

    const { image, setImage } = useContext(GlobalContext)


    const images = {
        productOne: '/src/assets/img/image-product-1.jpg',
        productTwo: '/src/assets/img/image-product-2.jpg',
        productThree: '/src/assets/img/image-product-3.jpg',
        productFour: '/src/assets/img/image-product-4.jpg'
    }



    return (
        <Flex justify="center" direction="column" gap="1rem" as="section" boxSize="100%" overflow="hidden">
            <Image borderRadius="1rem" boxSize="100%" src={image}></Image>
            <HStack justify="center" boxSize="100%">
                <Image onClick={() => {
                    setImage(images.productOne)
                }} filter={image === images.productOne ? "opacity(50%)" : "opacity(100%)"} borderRadius="1rem" boxSize="4rem" src={images.productOne}></Image>
                <Image onClick={() => { setImage(images.productTwo) }} filter={image === images.productTwo ? "opacity(50%)" : "opacity(100%)"} borderRadius="1rem" boxSize="4rem" src={images.productTwo}></Image>
                <Image onClick={() => { setImage(images.productThree) }} filter={image === images.productThree ? "opacity(50%)" : "opacity(100%)"} borderRadius="1rem" boxSize="4rem" src={images.productThree}></Image>
                <Image onClick={() => { setImage(images.productFour) }} filter={image === images.productFour ? "opacity(50%)" : "opacity(100%)"} borderRadius="1rem" boxSize="4rem" src={images.productFour}></Image>
            </HStack>
        </Flex>

    )
}
