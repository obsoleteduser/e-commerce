import { createContext, useState } from "react";


export const GlobalContext = createContext()


export const GlobalProvider = ({children})=>{

    const price  = 125.00
    const [basket, setBasket] = useState(false)
    const [image, setImage] = useState('../src/assets/img/image-product-1.jpg')
    const [number, setNumber] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)
    
    

    const values = {
        basket,
        setBasket,
        image,
        setImage,
        totalPrice,
        setTotalPrice,
        price,
        number,
        setNumber
    }

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>

}