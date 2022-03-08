import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Brands extends React.Component {

  
  render ()
  {
  return(
   <>
   <div  className="brand-title">
      <h1><b>हाम्रो साझेदार</b></h1>
      </div>
    <div id='brands-bar' class="brand">
   
        <div class="container-fluid">
          <div class="brand-slider">
            <div class="brand-item"><img src="./images/brand-1.png" alt="" /></div>
            <div class="brand-item"><img src="./images/brand-2.png" alt="" /></div>
            <div class="brand-item"><img src="./images/brand-3.png" alt="" /></div>
            <div class="brand-item"><img src="./images/brand-4.png" alt="" /></div>
            <div class="brand-item"><img src="./images/brand-5.png" alt="" /></div>
            <div class="brand-item"><img src="./images/brand-6.png" alt="" /></div>
          </div>
        </div>
      </div>
    
</>
  )
  }
}

export default Brands