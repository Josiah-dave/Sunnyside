import React from 'react'
import Image from './Image'
import arrowDown from '../images/icon-arrow-down.svg'
const Navbar = () => {
  return (
    <div className='container-fluid'> 
    <nav className="navbar navbar-expand-md navbar-lite py-4">
        <a className="navbar-brand" href="#">Sunnyside</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link bg-white text-dark px-4 py-2 btn-contact" href="#">Contact</a>
                </li>
            </ul>
            
        </div>
    </nav>
       <div className="move">
           <h1 className="we">WE ARE CREATIVES</h1>
           <Image img={arrowDown} Josh='arrow' />
       </div>

    </div>
  )
}

export default Navbar