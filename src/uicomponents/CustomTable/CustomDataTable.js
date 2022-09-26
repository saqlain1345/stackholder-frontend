import React from 'react'
import './CustomDataTable.css'
import TableHeader from './TableHeader'

const CustomDataTable = ({title, addButton, data}) => {

    const totalitems = data?.body?.length;
    const totalheader = data?.header?.length;

    return (
        <>
            <TableHeader title={title} addButton={addButton}/>
            <div className='tableBodyPart'>
                {/* <div className="tableColumn">
                    <div className="tableData">
                        <div className='tablecont tabletextdata tablelabel'>
                            <p>images</p>
                        </div>
                        {
                        Array.from({length: 10}, (_, i) => (
                            <div className='tablecont tableimgdata'>
                                <img src="/img/olx.png"/>
                            </div>
                        ))
                    } </div>
                </div> */}
                {
                data?.header?.map((header, index) => (

                    <div className="tableColumn">
                        <div className="tableData">
                            <div className='tablecont tabletextdata tablelabel'>
                                <p>{header.title}</p>
                            </div>
                            {
                                
                                data?.body?.map((item, i) => (
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

export default CustomDataTable
