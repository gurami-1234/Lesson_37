import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextComponent'

const Navbar = () => {
    const theme = useContext(ThemeContext)
  return (
    <div>
        Navbar:{theme.isDark?"DARK":'LIGHT'}
        <br />
        <button onClick={()=>theme.setIsDark(!theme.isDark)}>Change Theme</button>
    </div>
  )
}

export default Navbar