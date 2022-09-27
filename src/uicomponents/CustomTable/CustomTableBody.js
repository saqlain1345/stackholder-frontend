import React from 'react'
import './CustomTableBody.css'

const CustomTableBody = ({data}) => {
  return (
    <>
    <div className='tableBodyPart'>
                {
                data?.header?.map((header, index) => (

                    <div className="tableColumn">
                        <div className="tableData">
                            <div className='tablecont tabletextdata tablelabel'>
                                <p>{header.title}</p>
                            </div>
                            {
                                
                                data?.body?.slice(0, 10).map((item, i) => (
                                    header.type === "image"  ?
                                            <div className='tablecont tableimgdata'>
                                                <img src={item[header.title]}/>
                                            </div>
                                        : 
                                            <div className='tablecont tabletextdata'>
                                                <p>{item[header.title]}</p>
                                            </div>
                                        
                                ))
                                
                                
                            } 
                        </div>
                    </div>
                ))
            } </div>
    </>
  )
}

export default CustomTableBody