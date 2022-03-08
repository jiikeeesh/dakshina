import React from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'

const About1 = () => {
  return (
      <>
   
       <Navbar1/>
    <br/>
    <br/>
    <br/>
    <div className="container">
      <h2 >वित्त पोषण के हो?</h2><p><b>वित्तपोषण</b> means asking any financial institution (bank, credit union, finance company) or another person to lend you money that you promise to repay at some point in the future. In other words, when you buy a car, if you do not have all the cash for it, the dealer will look for a bank that will finance it for you. Upon approval, the bank will pay the car dealer the money for the car, and then they will send you a bill each month. The bank will lend you this money if you agree to pay interest on top of the money lent to you. In other words, financing is borrowing money with a promise to repay that money and some additional fee, or interest, over a period of time. </p>
		
    </div>
    <br/>
    <br/>
    <br/>
    <Footer1/>

    <div className='translate'>भाषा परिवर्तन गर्नुहोस्

      <Link to="/about"><input type="submit" value="इंग्लिश "/></Link>
      <Link to="/about1"><input type="submit" value="नेपाली  "/></Link>
    </div>
      </>

  )
}

export default About1