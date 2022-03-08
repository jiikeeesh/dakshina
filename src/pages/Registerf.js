import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'

const Registerf = () => {
  return (
    <>
    <Navbar/>

    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>User has Been Register</h3>
					<form action="#" method="post">
					
					
                        <div className="forg">
					<Link to="/" className="forg-left">Back to Homepage</Link>
					<Link to="/login" className="forg-right">Login</Link>
				<div className="clearfix"></div>
				</div>
					</form>
				</div>
				
			</div>
		</div>


    <Footer/>
    </>
  )
}

export default Registerf