import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import ShareSadasyaApi from '../Api/ShareSadasyaApi'






const ShareSadasya = () => {

  const[Share]= useState(ShareSadasyaApi)
  return (
  <>
  
  <Navbar1/>
  <br/>
  <br/>
  <br/>

  <div id="team-sub">
      <div className="container">
          <div className="card-sub">

              <div className="punji-title"><h4><b>शेयरसदस्य विवरण</b></h4></div>
              <br/>
              <br/>

<h4>संस्थाको चालु आ.व. ०७४/०७५ मा विवरणमा उल्लेखित शेयर सदस्यहरु रहेको अवगत गराउँदछौं ।</h4>
              <br/>
              <br/>

              <table striped bordered hover>
  <thead>
    <tr>
      <th><b>विवरण</b></th>
      <th><b>सदस्य संख्या</b></th>
      <th><b>शेयर रकम</b></th>
      <th><b>शेयर प्रतिशत</b></th>
      
    </tr>
  </thead>
{ShareSadasyaApi.map((share, index)=>{
  return(
  <tbody>
    <tr>
      <td>{share.type}</td>
      <td>{share.MemberNum}</td>
      <td>{share.Amount}</td>
      <td>{share.Percentage}</td>
      
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

export default ShareSadasya