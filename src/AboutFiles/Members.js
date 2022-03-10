import React, { useState } from 'react'
import Directors from '../NewPages/Directors'
import Board from '../Api/BodApi'
import NavTop from '../dashboard/NavTop'
import Navbar1 from '../dashboard/Navbar1'

import Footer1 from '../dashboard/Footer1'
import QuickLinks from '../Navfiles/QuickLinks'

const Members = () => {
    const [boardDir, setBoardDir]=useState(Board)
    
    const FilterItems=(category)=>{
        const updatedItems=Board.filter((curElem)=>{
            return curElem.category===category;
        })
        setBoardDir(updatedItems);
    }
  return (
<>
<NavTop/>
  <Navbar1/>
  <br/>
  <br/>
  <br/>

  <div id="team-sub">
      <div className="container">
          
        <div className="row">
            <div className="right">
                <div className="card-sub">
                <Directors  boardDir={boardDir}/>
                    
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

export default Members