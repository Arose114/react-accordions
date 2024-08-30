import React from 'react'
import data from './data'



const Accordion = () => {

    const dataItem= data.map((item)=>{
        return (
        <>
        <h2 index={item.id}>{item.title}</h2>
        <p index={item.id}>{item.Description}</p>
        <hr/>

</>
        )
    })
  return (
    <div>
      
      <h2>Accrodion Data</h2>
      {dataItem}
    </div>
  
    

  )


}

export default Accordion
