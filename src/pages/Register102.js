import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'

const Register102 = () => {
  return (
    <>
    <Navbar1/>
    
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>दर्ता गर्नुहोस्</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" placeholder='इमेल' name="Email" />
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" value="इमेल पुष्टि गर्नुहोस्" name=" Confirm-Email" />
							<div className="clearfix"></div>
						</div>
						
						<Link to="/register104"><input type="submit" value="अर्को"/></Link>
					</form>
				</div>
				
			</div>
		</div>
    <Footer1/>
    <div className='translate'>भाषा परिवर्तन गर्नुहोस्

<Link to="/register1"><input type="submit" value="इंग्लिश "/></Link>
<Link to="/register102"><input type="submit" value="नेपाली  "/></Link>
</div>
    </>
  )
}

export default Register102