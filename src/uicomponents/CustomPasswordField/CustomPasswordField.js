import React from 'react'
import './CustomPasswordField.css'
import {useEffect, useRef, useState} from 'react'



const CustomPasswordField = ({required, name, onChange, label}) => {
  const [focus, setFocus] = useState(false)
  const [borderFocus, setBorderFocus] = useState(false)
  const handleFocus=(e)=>{
    setFocus(true)
    setBorderFocus(true)
  }
  const handleFocusOut = (e)=>{
      if(e.target.value === "") setFocus(false)
      setBorderFocus(false)
  }

  return (
  <>

    <div className="custom_container">
      <div className="custom_textField" style={borderFocus? {border:"2px solid #1976d2"}: {border:"1px solid rgba(0, 0, 0, 0.288)"}}>
        <p className={focus ? 'custom_focusp': 'custom_nonfocusp'} style={borderFocus?{color:"#1976d2"}:{color:"#666"}}>{label} {required ? "*": ""}</p>
        <input type="password" name={name} onChange={onChange} onFocus={handleFocus} onBlur={handleFocusOut}/>
      </div>
    </div>
  </>
  )
}

export default CustomPasswordField