import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'

const Register = () => {
  return (
    <>
    <Navbar/>
    
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>Register</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text" value="Firstname" name="Fristname" />
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text" value="MiddleName" name="Lastname" />
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text" value="LastName" name="LastName" />
							<div className="clearfix"></div>
						</div>
						
						<Link to="/reg1"><input type="submit" value="Next"/></Link>
					</form>
				</div>
				
			</div>
		</div>
    <Footer/>
    </>
  )
}

export default Register