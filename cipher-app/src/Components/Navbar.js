import React from 'react'
// import logo from '/home/amateur/Desktop/dont touch/pendrive/js/projects/portfolio/portfolio/src/Components/Image/logo.png'

import { Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      
      <div className="rightArea">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/caesar">Caesar</Link></ul>  
        <ul><Link to="/hill">Hill</Link></ul>  
        <ul><Link to="/viginere">Viginere</Link></ul>
        <ul><Link to="/oneTimePad">OneTime Pad</Link></ul>
      </div>
    </div>
  )
}
