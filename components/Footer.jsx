import React from 'react'
import fb from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import twit from '../images/icon-twitter.svg'
import pint from '../images/icon-pinterest.svg'
import Image from './Image'

const Footer = () => {
  return (
    <div className='footer text-center'>
        <h1 className="foot-head py-5">Sunnyside</h1>
        <p>
            <span className='foot-links'><a href="" className="foot-links">About</a></span>
            <span className='foot-links'><a href="" className="foot-links">Services</a></span>
            <span className='foot-links'><a href="" className="foot-links">Projects</a></span>
            
        </p>
        <p>
            <span className='foot-icons my-5'>
            <Image img={fb} Josh='icons' />
            </span>
            <span className='foot-icons my-5'>
            <Image img={insta} Josh='icons' />
            </span>
            <span className='foot-icons my-5'>
            <Image img={twit} Josh='icons' />
            </span>
            <span className='foot-icons my-5'>
            <Image img={pint} Josh='icons' />
            </span>
        </p>
    </div>
  )
}

export default Footer