import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import NepalSarkarApi from '../Api/NepalSarkarApi'






const NepalSarkar = () => {

  const[tax]= useState(NepalSarkarApi)
  return (
  <>
  <NavTop/>
  <Navbar1/>
  <br/>
  <br/>
  <br/>

  <div id="team-sub">
      <div className="container">
          <div className="card-sub">

              <div className="punji-title"><h4><b>वित्तिय विवरण</b></h4></div>
              <br/>
              <br/>

              <h4>देशभर संचालित करिब ३३,००० सहकारी संस्थाहरुमा सम्भवत हामी नेपाल सरकारलाई राजश्वमा गरेको योगदानमा अग्रण स्थानमा रहेका छौं । आ.व. ०७०/०७१ देखि ०७३/०७४ सम्म हामीले नेपाल सरकारलाई निम्नानुसार राजश्व भुक्तानी गरेको व्यहारो अवगत गराउँद छौं ।</h4>

              <br/>
              <br/>

              <table striped bordered hover>
  <thead>
    <tr>
      <th><b>सि.नं.</b></th>
      <th><b>आ.व. ०७१/०७२</b></th>
      <th><b>आ.व. ०७२/०७३</b></th>
      <th><b>आ.व. ०७३/०७४</b></th>
      <th><b>आ.व. ०७४/०७५</b></th>
    </tr>
  </thead>
{NepalSarkarApi.map((tax, index)=>{
  return(
  <tbody>
    <tr>
      <td>{tax.id}</td>
    
      <td>{tax.date1}</td>
      <td>{tax.date2}</td>
      <td>{tax.date3}</td>
      <td>{tax.date4}</td>
    </tr>
  </tbody>
  )
})}


  
</table>
    
              

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

export default NepalSarkar