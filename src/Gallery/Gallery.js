import React,{useState} from 'react';

import Footer1 from '../dashboard/Footer1';
import Navbar1 from '../dashboard/Navbar1';
import NavTop from '../dashboard/NavTop';

import GalleryApi from '../Api/GalleryApi';






const Gallery = () => {

  const [image, setImage]=useState(GalleryApi);

 
  return (
    
    <>
    <NavTop/>
    <Navbar1/>
    <br/>
    <br/>
    <br/>
    

    <div id="team-sub">
      <div className="container">
      <div className="punji-title">
      <h4><b>फोटो एल्बम </b></h4>
      </div>
          
        <div className="row">
            
                <div className="card-sub">
                {GalleryApi.map((image, index)=>{
             return(
              <div className="col-md-3 footer-grid">
    
              <div className="image-container">
                  <img src={image.image}/>
                </div>
                <div className="vertical-line">
          
                </div>
                <div className="image-title">
                  <h4>{image.title}</h4>
                
              </div>
                
          
              </div>
             )
           })}
	
                       
           
                    
                </div>
           
            
          
           
            
        </div>
    </div>
    </div>





{/*     
    <div id="team-sub">
        <div className="container">
          <div className="card-sub">
            
           {GalleryApi.map((image, index)=>{
             return(
              <div className="col-md-3 footer-grid">
    
              <div className="image-container">
                  <img src={image.image}/>
                </div>
                <div className="vertical-line">
          
                </div>
                <div className="image-title">
                  <h4>{image.title}</h4>
                
              </div>
                
          
              </div>
             )
           })}
	
  </div>
    </div>
    </div> */}

      

              {/* {GalleryApi.map((image, id)=>{
                return(
                  <div class="card">
    <img class="card-img-top" src={image.image} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button className='btn-secondary'>See More</button>
    </div>
  </div>
                )
              })} */}
  
   

    <br/>
    <br/>
    <br/>
    <Footer1/>
    </>
  )
}

export default Gallery