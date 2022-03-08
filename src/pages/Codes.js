import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'


const Codes = () => {
  return (
    <>
    
    <Navbar/>
    <Footer/>
    <div className='translate'>change the Language.
	    <Link to="/codes"><input type="submit" value="English"/></Link>
	    <Link to="/codes1"><input type="submit" value="Nepali"/></Link>
    </div>
    </>
  )
}

export default Codes