import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'

const Codes1 = () => {
  return (
    <>
    <Navbar1/>
    <Footer1/>
    <div className='translate'>भाषा परिवर्तन गर्नुहोस्

        <Link to="/code"><input type="submit" value="इंग्लिश "/></Link>
        <Link to="/codes1"><input type="submit" value="नेपाली  "/></Link>
    </div>
	
    </>
  )
}

export default Codes1