import React, { useState } from 'react'
import styl from '../../Assets/style1.png'
import styl1 from '../../Assets/style4.png'
import styl2 from '../../Assets/style3.png'
import "./Slider.css"

const Slider = () => {
  const[currentState, setCurrentState]= useState(0)

  const data =[
    {url: styl, text:'LOOKING FOR SOMETHING ELEGANT?'},
    {url: styl1, text:'A FEEL OF LUXURY...'},
    {url: styl2, text: 'SHOP STYLERAPY'}

  ]

  const sliderStyle ={
    backgroundImage: `url(${data[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  }

  const goToNext = ()=>{
    setCurrentState(currentState)
  }
  
  return (
    <div className='Slider'>
      <div style={sliderStyle}></div>
      <div>
        <div className='Overlay'></div>
        <h2>{data[currentState].text}</h2>
        <button>SHOP NOW</button>
        <div className='Main'>
          {
            data.map((data, currentState)=> {
              return <span
                key={currentState}
                onClick={() => goToNext(currentState)}>
              </span>
            })
          }
        </div>
      </div>

      
    </div>
  )
}

export default Slider