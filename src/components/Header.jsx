import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'



const Header = () => {

  
  return (
    <ContenedorHeader>
    <Titulo>Blog de Lenguajes de Programación</Titulo>

    <Menu>
      <NavLink to='/'> Inicio</NavLink> {/* NavLink funciona como una ancla '<a href="http:// ' */}
      <NavLink to='/blog'> Blog</NavLink>
      <NavLink to='/acerca-de'> Acerca de</NavLink>
    </Menu>
  </ContenedorHeader>
  )
}
const ContenedorHeader = styled.header `
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
  `
  const Titulo = styled.h1`
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #ff0000;
  margin-botton: 20px;
`

const Menu = styled.nav `
  a{
    text-decoration: none;
    color: #165168;
    margin: 0 20px;
  }

  a:hover{
    border-bottom: 2px solid #165168;
    padding: 5px;
  }

  a:active{
    background-color: red;
    color: white;
  }
`
export default Header 