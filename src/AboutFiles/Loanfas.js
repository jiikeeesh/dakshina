import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import LoanApi from '../Api/LoanApi'

import "./aboutfiles.css"



const Loanfas = () => {

  const[loan]=useState(LoanApi)
  return (


    <>
    <NavTop/>
    <Navbar1/>
    <br/>
    <br/>
    <br/>

    <div id="team-sub">
        <div className="container">
        <div className="punji-title">
      <h4><b>कर्जा सुविधा </b></h4>
      </div>
            <div className="card-sub">

            <table striped bordered hover>
  <thead>
    <tr>
      <th><b>सि.नं.</b></th>
      <th><b>कर्जा शिर्षक</b></th>
      <th><b>साँवा ब्याज महिना महिनामा तिर्दा</b></th>
      <th><b>मासिक ब्याज त्रैमासिक साँबा तिर्दा</b></th>
      <th><b>मासिक ब्याज ६/६ महिनामा साँबा तिर्दा</b></th>
    </tr>
  </thead>

  {LoanApi.map((loan, index)=>{
    return(
      <tbody>
        <tr>
          <td>{loan.id}</td>
          <td>{loan.loanTopic}</td>
          <td>{loan.oneMonth}</td>
          <td>{loan.oneYear}</td>
          <td>{loan.sixMonth}</td>
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

export default Loanfas