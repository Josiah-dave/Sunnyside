import React from 'react'
// import arrowDown from '../images/icon-arrow-down.svg'
const Image = ({img, Josh}) => {
  return (
    <>
      {/* <img src={arrowDown} alt="" className='arrow'/> */}
      <img src={img} alt="" className={Josh} width='100%'/>
    </>
  )
}

export default Image