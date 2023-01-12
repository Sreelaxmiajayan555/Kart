// import { Button } from 'react-bootstrap';
import c1 from '../images/cFolder/c1.jpg'
import c2 from '../images/cFolder/c2.jpg'
import c3 from '../images/cFolder/c3.jpg'
import c4 from '../images/cFolder/c4.jpg'


import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  
export default function Carousal() {
    return (
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src={c1}
          alt='...'
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>
  
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={c2}
          alt='...'
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>
  
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={c3}
          alt='...'
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src={c4}
          alt='...'
        >
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>
      </MDBCarousel>
    );
  }