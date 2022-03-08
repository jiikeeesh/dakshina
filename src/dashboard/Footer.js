import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <>
    
<div className="footer">
	<div className="container">
		<div className="col-md-3 footer-grid">
			<h3>About Us</h3>
			<p>Nam libero tempore, cum soluta nobis est eligendi 
				optio cumque nihil impedit quo minus id quod maxime 
				placeat facere possimus.</p>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>Work</h3>
			<ul>
				<li><Link to="/">Home</Link></li>
				
				<li><Link to="/codes">Codes</Link></li>
									 
				<li><Link to="/about">About</Link></li> 
				
			</ul>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>Customer Services</h3>
			<ul>
				
				<li><Link to="">Terms & Conditions</Link></li>
				<li><Link to="">Faqs</Link></li>
				<li><Link to="/contact">Contact</Link></li>
										 
				 
			</ul>
		</div>
		<div className="col-md-3 footer-grid">
			<h3>My Account</h3>
			<ul>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/register">Register</Link></li>
				<li><Link to="/homepage1">Change Language</Link></li>
				
				
				
			</ul>
		</div>
		<div className="clearfix"></div>
			<div className="footer-bottom">
				<h2 ><Link to="/homepage">Dakshina<span>Sahakari</span></Link></h2>
				<p className="fo-para"></p>
				<ul className="social-fo">
					<li><Link to="#" className=" face"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
				</ul>
				<div className=" address">
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-home" aria-hidden="true"></i>12K Street , 45 Building Road Canada.</p>
					</div>
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-phone" aria-hidden="true"></i>+1234 758 839 , +1273 748 730</p>	
					</div>
					<div className="col-md-4 fo-grid1">
						<p><Link to="mailto:info@example.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>info@example1.com</Link></p>
					</div>
					<div className="clearfix"></div>
					
					</div>
			</div>
		<div className="copy-right">
			<p> &copy;Dakshina Finance</p>
		</div>
	</div>
</div>


    </>
  );
}

export default Footer