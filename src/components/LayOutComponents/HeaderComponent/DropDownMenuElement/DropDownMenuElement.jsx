import React from 'react';
import './DropDownMenuElement.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const borderBottomInitialStyle = {
  width:'0px',
  height: '3px',
  backgroundColor: 'white'
}
const borderBottomHoverStyle = {
  width:'14vw',
  height: '3px',
  backgroundColor: '#CDCDCD',
  transition: '0.45s'
}

export default function DropDownMenuElement(props) {
  const [borderBottomStyle, setBorderBottomStyle] = useState(borderBottomInitialStyle)
  const navigate = useNavigate()
  return (
    <div className='DropDownMenuElement' onClick={(e) => navigate(`${props.NavLink}`)}>
      <p className='DropDownMenuElement-Text' onMouseEnter={(e)=> setBorderBottomStyle(borderBottomHoverStyle)} onMouseLeave={(e)=>setBorderBottomStyle(borderBottomInitialStyle)}>
        {props.Text}
        <div className='borderBottom' style={borderBottomStyle}>

        </div>
      </p>
    </div>
  )
}
