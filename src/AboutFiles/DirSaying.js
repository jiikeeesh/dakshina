import React from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import QuickLinks from '../Navfiles/QuickLinks'



import "./aboutfiles.css"

const DirSaying = () => {
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
                         <div className="dir-image">
                <img src="../images/ki2.jpg" alt="" />

            </div>
            <div className="dir-saying">
                <p>Lorem ipsum dolor sit amet consectetur adipieniam atque magnam exercitationem, fugit aut consequuntur reprehenderit sunt cum sequi, ut officia earum laudantium alias ipsum in eum blanditiis voluptate totam aliquid doloribus! A consectetur cumque unde quaerat quo quod corporis quisquam saepe temporibus facere voluptatem placeat consequatur accusantium facilis, ipsa vel, iste nam eum suscipit? Quasi voluptas est suscipit temporibus in accusamus. Dignissimos corporis voluptas, nesciunt repellendus cumque sapiente temporibus et sint expedita, odio enim? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, et similique, ea accusantium ipsa unde architecto distinctio enim quae iste odio voluptate doloribus, eaque id laboriosam? Error eos perferendis animi?</p>
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

export default DirSaying