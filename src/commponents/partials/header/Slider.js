import React from "react";
// import { Link } from "react-router-dom";
import './Min.css'
import img1 from "./images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
import img2 from "./images/force-majeure-du8AbwM5z2g-unsplash.jpg"
import img3 from "./images/inspirationfeed-PsxNKud0ucg-unsplash.jpg"
import "react-alice-carousel/lib/alice-carousel.css";



import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img width={'60%'} height={'250px'} style={{marginTop:'20px',margin:'0 auto'}} src={img1} onDragStart={handleDragStart} role="presentation" alt="hdf"/>,

  <img width={'60%'} height={'250px'} style={{marginTop:'20px',margin:'0 auto'}} src={img2} onDragStart={handleDragStart} role="presentation" alt="fdhfg"/>,
  
  <img width={'60%'} height={'250px'} style={{marginTop:'20px',margin:'0 auto'}} src={img3} onDragStart={handleDragStart} role="presentation" alt="jd"/>,
];

const Slider = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Slider;
      
		
                
	



      
		
                
	



