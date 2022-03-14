import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import InvestmentApi from '../Api/InvestmentApi'


import "./aboutfiles.css"



const Investments = () => {

  const[invest]=useState(InvestmentApi);
  return (


    <>
   
    <Navbar1/>
    <br/>
    <br/>
    <br/>

    <div id="team-sub">
        <div className="container">
            <div className="card-sub">

            <table striped bordered hover>
  <thead>
    <tr>
      <th><b>S.N</b></th>
      <th><b>Organization Name</b></th>
    </tr>
  </thead>

  {InvestmentApi.map((invest,index)=>{
    return(
      <tbody>
        <tr>
          <td>{invest.id}</td>
          <td>{invest.OrgName}</td>
          
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

export default Investments;