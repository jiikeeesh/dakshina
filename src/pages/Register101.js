import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'

const Register101 = () => {
  return (
    <>
     <Navbar1/>
    
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>दर्ता गर्नुहोस्</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text" value="नाम" name="Fristname" />
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text" value="MiddleName" name="Lastname" />
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text" value="थर " name="LastName" />
							<div className="clearfix"></div>
						</div>
						
						<Link to="/register102"><input type="submit" value="अर्को"/></Link>
					</form>
				</div>
				
			</div>
		</div>
    <Footer1/>
    </>
  )
}

export default Register101