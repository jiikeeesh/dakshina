import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import BiwarandApi from '../Api/BiwarandApi'






const Biwarand = () => {

  const[biwarand]= useState(BiwarandApi)
  return (
  <>
  
  <Navbar1/>
  <br/>
  <br/>
  <br/>

  <div id="team-sub">
      <div className="container">
          <div className="card-sub">

              <div className="punji-title"><h4><b>वित्तिय विवरण</b></h4></div>

              <table striped bordered hover>
  <thead>
    <tr>
      <th><b>सि.नं.</b></th>
      <th><b>विवरण</b></th>
      <th><b>२०७२ आषाढ मसान्त सम्म</b></th>
      <th><b>२०७३ आषाढ मसान्त सम्म</b></th>
      <th><b>२०७४ आषाढ मसान्त सम्म</b></th>
      <th><b>२०७५ आषाढ मसान्त सम्म</b></th>
    </tr>
  </thead>
{BiwarandApi.map((biwarand, index)=>{
  return(
  <tbody>
    <tr>
      <td>{biwarand.id}</td>
      <td>{biwarand.type}</td>
      <td>{biwarand.date1}</td>
      <td>{biwarand.date2}</td>
      <td>{biwarand.date3}</td>
      <td>{biwarand.date4}</td>
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

export default Biwarand