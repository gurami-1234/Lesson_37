import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextComponent'

const Footer = () => {
    const {isDark} = useContext(ThemeContext)
  return (
    <div>
        Footer: {isDark?"DARK":"LIGHT"}
    </div>
  )
}

export default Footer