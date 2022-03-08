import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
   <>
     <div className="header">

<div className="naver">
  <div className='container1'>
    <div className='dakshina'>
    <h1><Link to="/"><img src='dakshina.svg' height={110} width={300} margin-left={10}/></Link></h1>
    </div>
  

    <div className="logo">
    
    </div>
  </div>
 
  
    <div className="nav-top">
      <nav className="navbar navbar-default">
      
      <div className="navbar-header nav_2">
        <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
          <span className="sr-only">Toogle Navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        

      </div> 
      <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
        <ul className="nav navbar-nav ">
          <li className=" active"><Link to="/homepage1" className="hyper "><span>Home</span></Link></li>
          <li ><Link to="/bod" className="hyper "><span>BOD</span></Link></li>	
          <li ><Link to="/homepage1" className="hyper "><span>Finance</span></Link></li>
          <li ><Link to="/about" className="hyper "><span>About Us</span></Link></li>
          
          <li><Link to="/codes" className="hyper"> <span>Codes</span></Link></li>
          <li><Link to="/contact" className="hyper"><span>Contact</span></Link></li>
          <li><Link to="/login" className='hyper'><span>Log In</span></Link></li>
          
        </ul>
       
      </div>
      
      </nav>
      
					<div className="clearfix"></div>
				
       
      <div className="clearfix"></div>
    </div>
      
    </div>			
</div>
   </>
  )
}

export default Navbar1