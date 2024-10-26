import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextComponent'

const Main = () => {
    const {isDark,setIsDark} = useContext(ThemeContext)
  return (
    <div>
        Main:{isDark?"DARK":"LIGHT"}
        <br />
        <button onClick={()=>setIsDark(!isDark)}>Turn to {isDark?"LIGHT":"DARK"}</button>
    </div>
  )
}

export default Main