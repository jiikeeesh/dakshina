import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'

const Register1 = () => {
  return (
    <>
     <Navbar/>
    
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>Register</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" value="Email" name="Email" />
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" value="Confirm-Email" name=" Confirm-Email" />
							<div className="clearfix"></div>
						</div>
						
						<Link to="/reg2"><input type="submit" value="Next"/></Link>
					</form>
				</div>
				
			</div>
		</div>
    <Footer/>
	<div className='translate'>change the Language.
	    <Link to="/register1"><input type="submit" value="English"/></Link>
	    <Link to="/register104"><input type="submit" value="Nepali"/></Link>
    </div>
    </>
  )
}

export default Register1