import React, { useState } from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'


const Login1 = () => {

	const [email, setEmail]= useState('');
	const [password, setPassword]= useState('')
  return (
    <>
	
    <Navbar1/>
    

    <div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>लग - इन</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input type="text" value={email} name="Email" 
							onChange={(e)=>setEmail(e.target.value)} />
							<div className="clearfix"></div>
						
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password" value={password} name="Password" 
							onChange={(e)=>setPassword(e.target.value)}/>
							<div className="clearfix"></div>
						</div>
						
						<Link to="/userDashboard"><input type="submit" value="लग - इन"/></Link>
					</form>
				</div>
				<div className="forg">
					<Link to="/forgetpassword" className="forg-left">पासवर्ड बिर्सनुभयो?</Link>
					<Link to="/mainregistration" className="forg-right">दर्ता गर्नुहोस्</Link>
				<div className="clearfix"></div>
				</div>
			</div>
		</div>
    <Footer1/>
    <div className='translate'>भाषा परिवर्तन गर्नुहोस्

<Link to="/login"><input type="submit" value="इंग्लिश "/></Link>
<Link to="/login1"><input type="submit" value="नेपाली  "/></Link>
</div>
    </>
  )
}

export default Login1