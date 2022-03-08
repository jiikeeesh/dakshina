import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'

const Register3 = () => {
  return (
    <>
    <Navbar/>
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>Register</h3>
					<form action="#" method="post">
					<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password" value="Password" name="Password" />
							<div className="clearfix"></div>
						</div><div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password" value="Confirm-Password" name="Password" />
							<div className="clearfix"></div>
						</div>
						
						<Link to="/reg3"><input type="submit" value="Submit"/></Link>
					</form>
				</div>
				
			</div>
		</div>
    <Footer/>
	<div className='translate'>change the Language.
	    <Link to="/register3"><input type="submit" value="English"/></Link>
	    <Link to="/register103"><input type="submit" value="Nepali"/></Link>
    </div>
    </>
  )
}

export default Register3