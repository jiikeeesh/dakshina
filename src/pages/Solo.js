import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'

const Solo = () => {
  return (
    
    <>
    <Navbar/>
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
				<h3>User</h3>
				
				
					
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
    <Footer/>    
	<div className='translate'>change the Language.
	    <Link to="/solo"><input type="submit" value="English"/></Link>
	    <Link to="/solo1"><input type="submit" value="Nepali"/></Link>
    </div>
    </>
  )
}

export default Solo