import { useState } from 'react'
import './App.css'
import Header from './components/fmk-elements/_headers/header/Header'
import Hero1 from './components/fmk-elements/_heros/heroV1/hero'
import Box1 from './components/fmk-elements/_sections/box-1/box1'
import SquareGrid1 from './components/fmk-elements/_sections/square-grid-1/squareGrid1'
import SquareGrid3 from './components/fmk-elements/_sections/square-grid-3/squareGrid3'
import Slider5 from './components/fmk-elements/_sections/slider-5/slider5'
import TextList2 from './components/fmk-elements/_sections/text-list-2/textList2'
import Cta2 from './components/fmk-elements/_ctas/cta2/Cta2'
import Footer from './components/fmk-elements/_footer/footer/Footer'

function App() {
  return (
    <div className='main'>
      <Header
        logo={true}
        contact={true}
        contactType={"email"}
      />

      <Hero1/> 

      <Box1/>
      
      <SquareGrid1/>
      
      <SquareGrid3/>
      
      <Slider5/>
      
      <TextList2/>
      
      <Cta2/>
      
      <Footer/>
    </div>
  )
}

export default App
