import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import QuickLinks from '../Navfiles/QuickLinks'
import MembersDetailsApi from '../Api/MembersDetailsApi'




import "./aboutfiles.css"

const MembersDetails = () => {

    const [details]=useState(MembersDetailsApi);


   

  return (
  <>
 
  <Navbar1/>
  <br/>
  <br/>
  <br/>

  <div id="team-sub">
      <div className="container">
          
        <div className="row">
            <div className="right">
                <div className="card-sub">
                         <div className="content-image">
                <img src="../images/membersdetails.jpg" alt="" />
                <br/>
                <br/>
                <br/>

                <p>संस्थाको मिति २०७५/०८/२२ गते सम्पन्न १९औं वार्षिक साधारण सभामा सम्मान हुनुभएका संस्थापकहरुको सामूहिक तस्विर </p>

            </div>

            <div className='content-title'>
                <h3><b>
                संस्थापक सदस्य विवरण
                </b>
         
                </h3>

            </div>
            <div className="content-details">

            <table striped bordered hover>
  <thead>
    <tr>
      <th><b>S.N</b></th>
      <th><b>Name</b></th>
      <th><b>Contact-NO</b></th>
      <th><b>Address</b></th>
    </tr>
  </thead>

  {details.map((details, index)=>{
      return(
        <tbody>
            <tr>
                <td>{details.id}</td>
                <td>{details.name}</td>
                <td>{details.contactNo}</td>
                <td>{details.Address}</td>
            </tr>
        </tbody>
      )
      
  })}
  
</table>
    

            </div>
                    
                </div>
           
            </div>
            
      
            <QuickLinks/>
            
        </div>
    </div>
    </div>

<br/>
<br/>
<br/>
<Footer1/>

  </>
  )
   
  
}

export default MembersDetails