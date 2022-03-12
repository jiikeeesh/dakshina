import React from 'react'
import { Link } from 'react-router-dom'
import "./navfiles.css"



const QuickLinks = () => {
  return (
  <>
  
  <section id='team-main'>
    
      <div className="container">
        <div className="card-main">
      <ul className='quick-links'>
                           <li className='gun'><Link to="/dirsaying" className=''><span>प्रमुख कार्यकारी अधिकृतको भनाई </span></Link></li>
                           <li className="gun"><Link to="/introduction" className=''><span>परिचय </span></Link></li>
                           <li className="gun"><Link to="/objective" className=''><span>उद्देश्य</span></Link></li>
                           <li className="gun"><Link to="/members" className=''><span>संचालकहरूकाे विवरण</span></Link></li>
                           <li className="gun"><Link to="/membersdetails" className=''><span>संस्थापक सदस्य विवरण</span></Link></li>
                           {/* <li className="gun"><Link to="/" className=''><span>कर्मचारी व्यवस्थापन</span></Link></li> */}
                           <li className="gun"><Link to="/investment" className=''><span>विभिन्न संघ संस्थामा शेयर लगानी</span></Link></li>
                           {/* <li className="gun"><Link to="/" className=''><span>परियोजना संचालन</span></Link></li> */}
                           {/* <li className="gun"><Link to="/" className=''><span>संस्थागत सामाजिक उत्तरदायित्व</span></Link></li> */}
                           {/* <li className="gun"><Link to="/" className=''><span>अन्य क्षेत्र लगानी</span></Link></li> */}
                           <li className="gun"><Link to="/loan" className=''><span>कर्जा सुविधा</span></Link></li>
                           <li className="gun"><Link to="/nispak" className=''><span>निक्षेप सुविधा</span></Link></li>
                           <li className="gun"><Link to="/biwarand" className=''><span>वित्तिय विवरण</span></Link></li>
                           <li className="gun"><Link to="/nepalsarkar" className=''><span>नेपाल सरकारलाई राजश्वमा गरेको योगदान</span></Link></li>
                           </ul>
 
                  
                           </div>
      </div>
  </section>
  </>
  )
}

export default QuickLinks