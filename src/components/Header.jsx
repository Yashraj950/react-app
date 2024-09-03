import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XrV8-3XYoBp_1o3CTQ3bWf1oi5AA2v5tng&s" alt="logo" />
      </NavLink>
    <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem; 
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex; 
justify-content: space-between; 
align-items: center; 
.logo{
height: auto;
max-width: 40%;
border-radius: 50%;
}



`

export default Header