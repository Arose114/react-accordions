import React from 'react'
import data from './data'
import './styles.css'
import img1 from "../images/img1.jpeg"



const Accordion = () => {
  const [selected, setSelected]=React.useState('')
  const handleSingleSelection = (getCurrentId) =>{
   setSelected(getCurrentId)
   console.log(getCurrentId)
  }
   
        

  return (
    <div className='wrapper'>
      <button className='button'>Enable Multi Selection</button>
     <div className="accordion">
      {
      data && data.length > 0 ?(
  data.map((dataItem)=>(
      <div className='item'>
      <div className='title' onClick={()=>handleSingleSelection(dataItem.id)}>
        <img src={dataItem.imgUrl} alt='Rose' className='title-logo'/>
      <h2 index={dataItem.id}>{dataItem.title}</h2>
      <span>+</span>
      </div>

      {selected === dataItem.id ? (
        <div className='description'>{dataItem.Description}</div>
      ) : null}
      
      </div>
    ))
    ): ( 
    <div>No data found...</div>
  )}
    </div>
    </div>
  )
}


export default Accordion;
