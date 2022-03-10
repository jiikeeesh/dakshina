import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
// import QuickLinks from '../Navfiles/QuickLinks'
import "./aboutfiles.css"


const Carousels = () => {
  return (
      <>

  <NavTop/>
  <Navbar1/>
  <br/>
  <br/>
  <br/>
  <div id="team-sub">
    <div className="container">
      <div className="card-sub">
        
  
 
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <Link to="/"> <img className="first-slide" src="images/remitance1.jpg" alt="First slide"/></Link>
       
        </div>
        <div className="item">
         <Link to="/"> <img className="second-slide " src="images/remitance2.jpg" alt="Second slide"/></Link>
         
        </div>
        <div className="item">
          <Link to="/"><img className="third-slide " src="images/remitance3.jpg" alt="Third slide"/></Link>
          
        </div>
      </div>
    
    </div>

    </div>
    </div></div>
	

<br/>
<br/>
<br/>
<Footer1/>

      </>

  )
}

export default Carousels