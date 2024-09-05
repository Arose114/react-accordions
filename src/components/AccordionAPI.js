import React, { useEffect } from 'react'
import './styles.css'
import logo from "../logo.svg"
   

  const AccordionAPI=()=>{
  const [item, setItem]=React.useState([])
  const [selected, setSelected]=React.useState('')

  const handleSingleSelection = (getCurrentId) =>{
    setSelected(getCurrentId)
    console.log(getCurrentId)
   }

    useEffect(()=> {
        fetch(' https://dummy-json.mock.beecept')
        .then((res)=>{
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setItem(data)
        });
    

    }, [])
  
 
        

  return (
    <div className='wrapper'>
      <button className='button'>Enable Multi Selection</button>
     <div className="accordion">
      {
      item && item.length > 0 ?(
  item.map((dataItem)=>(
      <div className='item'>
      <div className='title' onClick={()=>handleSingleSelection(dataItem.id)}>
        <img src={logo} alt='Rose' className='title-logo'/>
      <h2 index={dataItem.id}>{dataItem.title}</h2>
      <span>+</span>
      </div>

      {selected === dataItem.id ? (
        <div className='description'>{dataItem.body}</div>
      ) : null}
      
      </div>
    ))
    ): ( 
    <div>No data dound</div>
  )}
    </div>
    </div>
  )

  }

export default AccordionAPI;
