import React from 'react'
import { NavLink } from 'react-router-dom'
import './CustomDataTable.css'

const TableHeader = ({title, addButton}) => {
    return (
        <div className='tableHeadContainer'>
            <div className='tableHeader'>
                <div className='leftsidetableheader'>
                    <h3 className='contentHeading'
                        style={
                            {
                                fontSize: "14px",
                                color: "#666",
                                marginRight: "20px"
                            }
                    }>{title}</h3>
                    <div className='searchBox'>
                        <img src='/img/search.png'/>
                        <p className='searchicontext'></p>
                        <div className='inputsearch'>
                            <input type="text" placeholder='Search'/>
                        </div>
                    </div>
                </div>
                <NavLink to={addButton}>
                    <div className='rightsidetableheader'>
                        <div className='addItemButton'>
                            <img src="/img/addbuttonwhite.png"/>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default TableHeader
