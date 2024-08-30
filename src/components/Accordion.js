import React from 'react'
import data from './data'


const Accordion = () => {

    const dataItem= data.map((item)=>{
        return <h2>{item}</h2>
    })
  return (
    <div>Accordion</div>

  )


}

export default Accordion
