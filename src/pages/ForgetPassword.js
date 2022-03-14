import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'


const ForgetPassword = () => {
  return (
    <>
	
    <Navbar1/>
    

    <div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>पासवर्ड बिर्सनुभयो?</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input type="text"  name="Email" />
							<div className="clearfix"></div>
						</div>
						
						
						<input type="submit" value="लग - इन"/>
					</form>
				</div>
				<div className="forg">
                <Link to="/login1" className="forg-left">लग - इन</Link>
					<Link to="/mainregistration" className="forg-right">दर्ता गर्नुहोस्</Link>
				<div className="clearfix"></div>
				</div>
			</div>
		</div>
    <Footer1/>
    
    </>
  )
}

export default ForgetPassword