import React from 'react'
import './topbar.css'

const Topbar = (props) => {
  return (
    <div className="topbar">
        <div className="topleft">
          <div className="logo">
            <img src="/img/newlogo.png" alt="" />
            <h3>StackHolders</h3>
          </div>
          <div className="nav" onClick={props.handleCollapse}>
            <img src="/img/nav.png" alt="" className="navimg"/>
          </div>
        </div>

        <div className="topright">
          <div className="nav">
            <img src="/img/bell.png" className="notimg" alt="" />
          </div>
          <div className="profile">
            <div className="profileimg">
              <img src="/img/photo.png" alt="" />
            </div>
            <img src="/img/settings.png" className="setimg" alt="" />
          </div>
        </div>
      </div>
  )
}

export default Topbar