import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalProvider } from './GlobalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <GlobalProvider>
    <ChakraProvider>
    <App />
 </ChakraProvider>
    
 </GlobalProvider>
 

)
