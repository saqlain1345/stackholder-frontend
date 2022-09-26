import React from 'react'
import SidebarData from '../../utils/sidebar.js'
import Sidebargroup from '../sidebargroup.js'
import './MobileSidebar.css'

const MobileSidebar = (props) => {
    return (
        <div className='sidebarmobile' style={props.collapse ? {visibility:"visible", opacity:"100%", zIndex:"2"}: {visibility:"hidden", opacity:"0%",zIndex:"0"}}>
            <div className='mobilecontent'>
                <div className={props.collapse? "sidebarcont" : "collapse"}>
                    <div className="logomobile">
                        <img src="/img/newlogo.png" alt=""/>
                        <h3>StackHolders</h3>
                    </div>
                    <div className='sideitems'>
                        <Sidebargroup data={SidebarData} handleCollapse={props.handleCollapse}/>
                    </div>
                </div>
                <div className='emptyspace' onClick={props.handleCollapse}></div>
            </div>
        </div>
    )
}

export default MobileSidebar
