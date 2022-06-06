import './Button.css'
import React from 'react'

export const Button = (props)=>{
const classes = `button ${props.className}`

return (
<button className={classes} onClick={props.onClick}  >{props.children}</button>
)
    
}