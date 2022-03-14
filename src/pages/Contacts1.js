
import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'
import NavTop from "../dashboard/NavTop"

const Contacts1 = () => {
  return (
    <>

      <Navbar1/>
    <br/>
    <br/>
    <br/>
    <br/>
            <div className="contact">
	<div className="container">
		<div className="spec ">
			<h3>सम्पर्क गर्नुहोस्</h3>
				<div className="ser-t">
					<b></b>
					<span><i></i></span>
					<b className="line"></b>
				</div>
		</div>
		<div className=" contact-w3">	
			<div className="col-md-5 contact-right">	
				<img src="images/cac.jpg" className="img-responsive" alt=""/>
			</div>
			<div className="col-md-7 contact-left">
				<h4>सम्पर्क जानकारी</h4>
				<p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
				aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
				est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
				<ul className="contact-list">
					<li> <i className="fa fa-map-marker" aria-hidden="true"></i> 756 Global Place, New York.</li>
					<li><i className="fa fa-envelope" aria-hidden="true"></i><a to="mailto:example@mail.com">mail@example.com</a></li>
					<li> <i className="fa fa-phone" aria-hidden="true"></i>+123 2222 222</li>
				</ul>
				<div id="container">
					
					<div id="parentHorizontalTab">
						
						<div className="resp-tabs-container hor_1">
							<div>
								<form>
									<input type="text" value="Name" name="Name"  required=""/>
									<input type="email" value="Email" name="Email"  required=""/>
									<textarea name="Message..." required="">Message...</textarea>
									<input type="submit" value="Submit" />
								</form>
							</div>
							
							<div>
								<div className="map-grid">
									<h5>सम्पर्क मार्फत</h5>
									<ul>
										<li>मोबाइल नम्बर : +123 456 7890</li>
										<li>कार्यालय नम्बर : +123 222 2222</li>
										<li>घर नम्बर : +123 456 7890</li>
										<li>फ्याक्स नम्बर: +123 456 7890</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			
				
				
			</div>
			
		<div className="clearfix"></div>
	</div>
	</div>
</div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer1/>
    </>
  )
}

export default Contacts1