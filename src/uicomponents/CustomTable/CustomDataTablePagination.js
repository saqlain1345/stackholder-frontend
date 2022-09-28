import React, { useState } from 'react'
import './CustomDataTablePagination.css'

const CustomDataTablePagination = () => {
  let n = 8;
  const [showPageNoSubmit, setShowPageNoSubmit] = useState(false)
  const handleChange = (e)=>{
    if(e.target.value === "") setShowPageNoSubmit(false)
    else setShowPageNoSubmit(true) 
  }
  return (
    <div className='tablePaginationContainer'>
      <div className='pageContents'>
          <div className='pagesNumber'>
            <p>&lt;</p>
          </div>
          <div className='paginationInput'>
            <input type="number" placeholder='Page No' onChange={handleChange}/>
          </div>
          <div className='paginationPageSubmitButton' style={showPageNoSubmit ? {display: "block", opacity: 1,  animation: "fade 1s", visibility: "visible", transition: "all 0.5s"} : {display: "none", opacity: 0, visibility: "hidden", transition: "all 0.5s"}}>
            <img src='/img/submit.png' />
          </div>
          <div className='pagesNumber'>
            <p>&gt;</p>
          </div>
      </div>
    </div>
  )
}

export default CustomDataTablePagination