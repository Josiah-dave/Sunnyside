import React from 'react'
import Image from './Image'
import egg from '../images/desktop/image-transform.jpg'
import rose from '../images/desktop/image-stand-out.jpg'
import emily from '../images/image-emily.jpg'
import cone from '../images/desktop/image-gallery-cone.jpg'
import bottles from '../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import sugar from '../images/desktop/image-gallery-sugarcubes.jpg'
const Gallery = () => {
  return (
    <>
    <div className='gallery gallery1' width='100%'>
        <div className="left">
          <div className="arrange">
          <h1 className='transform'>
            Transform your brand
          </h1>
          <p className="for-u mt-4">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <a href="" className="btn btn-learn bg-dark text-white mt-4">Learn More</a>
          </div>
        </div>
        <div className="right">
        <Image img={egg} />
        </div>


    </div>
    <div className='gallery gallery2' width='100%'>

      <div className="right">
    <Image img={rose} width='' />
    </div>

        <div className="left">
          <div className="arrange">
          <h1 className='transform'>
          Stand out to the right audience
          </h1>
          <p className="for-u mt-4">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <a href="" className="btn btn-learn bg-dark text-white mt-4">Learn More</a>
          </div>
        </div>
       
        


    </div>
    <div className='gallery gallery3' width='100%'>
        <div className="from-css">
        <div className="carry">
          <h1 className="head">Graphic Design</h1>
          <p className="note">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. </p>
        </div>
        </div>


        <div className="from-css1">
        <div className="carry">
          <h1 className="head">Photography</h1>
          <p className="note">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
        </div>
       
        
    </div>

<div className="card-area text-center " width='100%'>
         <h1 className="client-test">CLIENT TESTIMONIALS</h1>
  <div className="card-contain " width="100%">
      <div className="card text-center">
          <div className="card-head"><Image img={emily} Josh='profile' /></div>
          <div className="card-body">
            <p className="card-note">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h3 className="tag">Emily R</h3>
            <p className="tag-about"> Marketing Director</p>
          </div>
      </div>
      <div className="card text-center">
          <div className="card-head"><Image img={emily} Josh='profile' /></div>
          <div className="card-body">
            <p className="card-note">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h3 className="tag">Thomas S</h3>
            <p className="tag-about"> Chief Operating Oficer</p>
          </div>
      </div>
      <div className="card text-center">
          <div className="card-head"><Image img={emily} Josh='profile' /></div>
          <div className="card-body">
            <p className="card-note">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h3 className="tag">Jennie F</h3>
            <p className="tag-about"> Business Owner</p>
          </div>
      </div>
  </div>
</div>

<div className="imgs">
<Image img={cone} Josh='img-s' />
<Image img={bottles} Josh='img-s'/>
<Image img={sugar} Josh='img-s' />
<Image img={orange} Josh='img-s' />
</div>





    </>
  )
}

export default Gallery