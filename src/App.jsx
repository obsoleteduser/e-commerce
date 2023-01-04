import { useContext } from 'react'
import './App.css'
import { Basket } from './components/Basket'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { GlobalContext } from './GlobalContext'

function App() {
 
  const { basket } = useContext(GlobalContext)

  return (
    <div className="App">
     <Header></Header>
    {basket && <Basket></Basket>}
    <Main></Main>
    </div>
  )
}

export default App
