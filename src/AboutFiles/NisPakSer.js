import React from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'


const NisPakSer = () => {
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
      <h4><b>निक्षेप सुविधा </b></h4>
      </div>
          
        <div className="row">
            
              <div className="card-sub">
               
                
        
                    <div className="nispak-image">
                      <img src="../images/nispak.jpg"/>
                    </div>

                    

                    
               </div> 
        </div>
    </div>
    </div>




    {/* <div id="team-sub">
        <div className="container">
            <div className="card-sub">

           <img src='../images/ki2.jpg' alt='sewa'/>
           <br/>
           <img src="../images/ki6.jpg" alt="sewa" />

            </div>
        </div>
    </div> */}

    <br/>
    <br/>
    <br/>

  <Footer1/>
    
  </>
  )
}

export default NisPakSer