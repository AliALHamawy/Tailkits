import { useState } from 'react'
import './App.css'
import { Advantages, Brands, Contact, Footer, Header, Hero, Introducing, NavBar, Pricing, Scroll } from './Comonent/Import'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
    <Header show={show} setShow={setShow} />
    <NavBar show={show}/>
    <Hero />
    <Brands />
    <Advantages />
    <Contact />
    <Introducing />
    <Scroll />
    <Pricing />
    <Footer />
    </>
  )
}

export default App