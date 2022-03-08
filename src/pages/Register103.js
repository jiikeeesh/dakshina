import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'

const Register103 = () => {
  return (
   <>
<Navbar1/>

<div className="login">
    <div className="main-agileits">
            <div className="form-w3agile form1">
                <h3>सफलतापूर्वक दर्ता</h3>
                <form action="#" method="post">
                
                
                    <div className="forg">
                <Link to="/homepage1" className="forg-left">गृह पृष्ठमा फिर्ता</Link>
                <Link to="/login1" className="forg-right">लग - इन</Link>
            <div className="clearfix"></div>
            </div>
                </form>
            </div>
            
        </div>
    </div>


<Footer1/>


<div className='translate'>भाषा परिवर्तन गर्नुहोस्

    <Link to="/reg3"><input type="submit" value="इंग्लिश "/></Link>
    <Link to="/register103"><input type="submit" value="नेपाली  "/></Link>
</div>
   </>
  )
}

export default Register103