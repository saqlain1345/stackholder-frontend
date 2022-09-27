import React from 'react'
import './CustomDataTablePagination.css'

const CustomDataTablePagination = () => {
  let n = 8;
  return (
    <div className='tablePaginationContainer'>
      <div className='pageContents'>
      {Array.apply(null, {length:20}).map((e,i)=>(
          <div className='pagesNumber'>
            <p>{i}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default CustomDataTablePagination