import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    

    <div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>Login</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" value="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password" value="Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required=""/>
							<div className="clearfix"></div>
						</div>
						<input type="submit" value="Login"/>
					</form>
				</div>
				<div className="forg">
					<Link to="#" className="forg-left">Forgot Password</Link>
					<Link to="/register" className="forg-right">Register</Link>
				<div className="clearfix"></div>
				</div>
			</div>
		</div>
    <Footer/>
	<div className='translate'>change the Language.
	    <Link to="/login"><input type="submit" value="English"/></Link>
	    <Link to="/login1"><input type="submit" value="Nepali"/></Link>
    </div>
    </>
  )
}

export default Login