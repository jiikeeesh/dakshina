import React from 'react'
import { Link } from 'react-router-dom'




const UserNav = () => {

  
 
  return (
   <>
 
     <div className="header">

<div className="naver">
<div className='container1'>
    <div className='dakshina'>
    <h1><Link to="/"><img src='dakshina.svg' height={100} width={400}/></Link></h1>
    </div>



    <div className="logo">
    
    </div>
  </div>
  
  
    <div className="nav-top">
      <nav className="navbar navbar-default">
      
      <div className="navbar-header nav_2">
        <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
          <span className="sr-only">टुगल सूचनाहरू</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        

      </div> 
      <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
        <ul className="nav navbar-nav ">
          <li className=" active"><Link to="#" className='hyper  color'><span> <b>गृह पृष्ट</b>  </span></Link></li>
          <li class="dropdown ">
								<Link z="#" className="dropdown-toggle hyper color" data-toggle="dropdown" ><span>हाम्रोबारे<b class="caret"></b></span></Link>
								<ul class="dropdown-menu multi">
									<div class="row-main">
										<div class="main">
											<ul class="multi-column-dropdown">
			
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>प्रमुख कार्यकारी अधिकृतको भनाई</Link></li>
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>परिचय</Link></li>
												<li><Link to="#"> <i class="fa fa-angle-right" aria-hidden="true"></i>उद्देश्य</Link></li>
												<li><Link to="#"  ><i class="fa fa-angle-right" aria-hidden="true"></i>संचालकहरूकाे विवरण</Link></li>
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>संस्थापक सदस्य विवरण</Link></li>
												{/* <li><Link to="/"><i class="fa fa-angle-right" aria-hidden="true"></i>कर्मचारी व्यवस्थापन</Link></li> */}
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>विभिन्न संघ संस्थामा शेयर लगानी</Link></li>
												{/* <li><Link to="/"><i class="fa fa-angle-right" aria-hidden="true"></i>परियोजना संचालन</Link></li> */}
												{/* <li><Link to="/"><i class="fa fa-angle-right" aria-hidden="true"></i>संस्थागत सामाजिक उत्तरदायित्व</Link></li> */}
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>भावि कार्य योजना</Link></li>
												{/* <li><Link to="/"><i class="fa fa-angle-right" aria-hidden="true"></i>अन्य क्षेत्र लगानी</Link></li> */}
										
											</ul>
										
										</div>
										
										<div class="clearfix"></div>
									</div>	
								</ul>
							</li>
          	
          <li class="dropdown ">
								<Link z="#" class="dropdown-toggle  hyper  color" data-toggle="dropdown" ><span>योगदान<b class="caret"></b></span></Link>
								<ul class="dropdown-menu multi">
									<div class="row-main">
										<div class="main">
											<ul class="multi-column-dropdown">
			
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>पूँजी संरचना</Link></li>
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>वित्तिय विवरण</Link></li>
												<li><Link to="#"> <i class="fa fa-angle-right" aria-hidden="true"></i>नेपाल सरकारलाई राजश्वमा गरेको योगदान</Link></li>
												<li><Link to="#"> <i class="fa fa-angle-right" aria-hidden="true"></i>शेयरसदस्य विवरण</Link></li>
											</ul>
										
										</div>
										
										<div class="clearfix"></div>
									</div>	
								</ul>
							</li>
         

          <li class="dropdown ">
								<Link z="#" class="dropdown-toggle  hyper  color " data-toggle="dropdown" ><span>वित्तिय विवरण<b class="caret"></b></span></Link>
								<ul class="dropdown-menu multi">
									<div class="row-main">
										<div class="main">
											<ul class="multi-column-dropdown">
			
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>निक्षेप सुविधा</Link></li>
												<li><Link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i>कर्जा सुविधा</Link></li>
											</ul>
										
										</div>
										
										<div class="clearfix"></div>
									</div>	
								</ul>
							</li>
							<li ><Link to="#" className="hyper  color"   ><span>तस्बिर पुस्तिका</span></Link></li>
          <li><Link to="#" className="hyper color"><span>सम्पर्क</span></Link></li>
          <li><Link to="/login1" className='hyper color'><span>log-Out</span></Link></li>
          
        </ul>
       
      </div>
      
      </nav>
       
      <div className="clearfix"></div>
    </div>
      
    </div>			
</div>


   </>
  )
}

export default UserNav