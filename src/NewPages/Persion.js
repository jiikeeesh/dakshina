import React, { useState } from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'
import Board from '../Api/BodApi'
import Directors from './Directors'

const Persion = () => {

  return (
    <>
     <Navbar1/>
    <br/>
    <br/>
    <br/>
   
		<div className="single">
			<div className="container">
						<div className="single-top-main">
	   		<div className="col-md-5 single-top">
	   		<div className="single-w3agile">
							
<div id="picture-frame">
			<img src="images/of.png"  alt="" className="img-responsive"/>
		</div>
										
		
		
		
			</div>
			</div>
			<div className="col-md-7 single-top-left ">
								<div className="single-right">
				<h3></h3>
				
					
				 <div className="pr-single">
				  
				</div>
				<div className="block block-w3">
					<div className="starbox small ghosting"> </div>
				</div>
				<p className="in-pa"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
			   	
				<ul className="social-top">
					<li><Link href="#" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span></span></Link></li>
					<li><Link href="#" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span></span></Link></li>
					<li><Link href="#" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i><span></span></Link></li>
					<li><Link href="#" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i><span></span></Link></li>
				</ul>
					
				
				 
			   
			<div className="clearfix"> </div>
			</div>
		 

			</div>
		   <div className="clearfix"> </div>
	   </div>	
				 
				
	</div>
</div>
    <br/>
    <br/>
    <br/>
    <Footer1/>

    
    <div className='translate'>भाषा परिवर्तन गर्नुहोस्

        <Link to="/solo"><input type="submit" value="इंग्लिश "/></Link>
        <Link to="/solo1"><input type="submit" value="नेपाली  "/></Link>
    </div>    
    </>
  )
}

export default Persion