import React from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import { Link } from 'react-router-dom'



const Register104 = () => {
  return (
  <>
  <Navbar1/>
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>दर्ता गर्नुहोस्</h3>
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
						
						<Link to="/register103"><input type="submit" value="पेश गर्नुहोस्"/></Link>
					</form>
				</div>
				
			</div>
		</div>
<Footer1/>
	<div className='translate'>change the Language.
	    <Link to="/register1"><input type="submit" value="English"/></Link>
	    <Link to="/register104"><input type="submit" value="Nepali"/></Link>
    </div>
  </>
  )
}

export default Register104