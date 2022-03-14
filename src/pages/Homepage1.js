import React, { useState } from 'react'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import ImageCarousels from './ImageCarousels'

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import RemitanceSlider from './RemitanceSlider'


// import HomePageApi from '../Api/HomePageApi'





const Homepage1  = () => {
	// const [image ,setImage]= useState(HomePageApi)

	

	
	// const settings = {
	
	// 	speed: 5000,
	// 	autoplay: true,
	// 	autoplaySpeed: 0,
	// 	cssEase: "linear",
	// 	slidesToShow: 1,
		
	// 	infinite: true,
	// 	swipeToSlide: true,
	// 	centerMode: true,
	// 	focusOnSelect: true,
	// 	arrows: false,
	// 	dots: false,
		
	//   };

	
  return (
   <>
      

    <Navbar1/>

<div  className="imagecarousel">
	<ImageCarousels/>
	</div>

{/* 
	<div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <Link to="/"> <img className="first-slide" src="images/ba.jpg" alt="First slide"/></Link>
       
        </div>
        <div className="item">
         <Link to="/"> <img className="second-slide " src="images/ba1.jpg" alt="Second slide"/></Link>
         
        </div>
        <div className="item">
          <Link to="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide"/></Link>
          
        </div>
      </div>
    
    </div> */}
	<div className='scrollText'>
		<div className="container">
			<marquee behavior="scroll" direction=""><b>" सानो सानो बचत नै पुँजी निर्माणको आधार भएकोले खर्च कम गरौँ, दैनिक तथा मासिक आयबाट बचत गर्ने बनी बसालौँ । " | " अनुभवी बैंकर्स तथा सहकारी क्षेत्रमा अनुभव प्राप्त व्यक्तिहरुबाट संचालित " | " श्री दक्षिण फैनान्सलाई बनाऔं साथी जीवन स्तर उठ्छ माथि " | " ... सफलताको २१ औं वर्ष भरोसापूर्ण २२ औं वर्षमा संचालित " |
</b></marquee>
		</div>

	</div>
 

   
    
  
	
	{/* <!-- Three columns of text below the carousel --> */}

	{/* introduction  starts*/}
	<div className="introduction">
	<div className="container">
		<div className="col-md">
			<div className="intro-image">
				<img src="images/main-director.png" alt="" />
			</div>
			<div className="intro">
				<div className="intro-title">
					<h4><b>प्रमुख कार्यकारी अधिकृतको भनाई</b></h4>
				</div>
				<div className="intro-text">
					<p>हाम्रो संस्था संचालन अवधिकोे २१औं वर्ष पूरा गरी २२औं वर्षमा प्रवेश गरेको सुखद खबर आदरणीय शेयरसदस्यहरु महानुभावहरु समक्ष जानकारी गराउन पाउँदा मलाई अत्यन्तै खुसि लागेको छ ।</p>
				</div>
				<div className="intro-button">
					<Link to="/dirsaying"><button className="btn  solo" >थप पढ्नुहोस्</button></Link>
				</div>
			</div>
		</div>
		<div className="col-md">
		<div className="intro-image">
				<img src="images/ki6.jpg" alt="" />
		</div>
			<div className="intro">
				<div className="intro-title">
					<h4><b>परिचय</b></h4>
				</div>
				<div className="intro-text">
<p>देशमा स्थापना भएका वित्तिय संस्था, विकास बैंक तथा वाणिज्य बैंकहरूले मात्र कमजोर अवस्थामा रहेको राष्ट्रिय अर्थतन्त्रलाई अपेक्षाकृत रुपमा सुधारात्मक दिशातर्फ अगाडी बढाउन</p>				</div>
				<div className="intro-button">
					<Link to="/introduction"><button className="btn  solo">थप पढ्नुहोस्</button></Link>
				</div>
			</div>
		</div>


	</div>
	</div>


	{/* introduction ends */}

	<div className="container">
		<div className="line"></div>
	</div>



	{/* services start */}


	<div className="product">
	<div className="container">
	<div className="service-tile">
				<h3><b>हाम्रा सेवाहरू</b></h3>
				</div>
{/* 			
		
		<div className="col-md-4 m-w3ls table-bordered table-hover ">
			<div className="col-md1  ">
			
					<img src="images/loan.svg" className="service-image img-responsive img" alt=""/>
					<div className="big-s">
								<div className="service-title">
									<h2><b>कर्जा सुविधा</b></h2>
								</div>
							<div className="service-text">
								<p>कर्जा लगानी संस्थाले कर्जा लगानीमा विभेदिकरणको सिद्धान्तलाई विशेष रुपमा पालना गर्दै तपशिल विवरणमा उल्लेखित कर्जा शिर्षकहरुमा कर्जा प्रवाह गर्दै आएको व्यहोरा अवगत गराउँदछौं ।</p>
							</div>
							<div className="service-button">
								<a name="" id="" className="btn btn-primary"  role="button">थप पढ्नुहोस्</a>	
							</div>
					</div>
				
			</div>
		</div>
		<div className="col-md-4 m-w3ls1 table-bordered">
			<div className="col-md ">
				<div>
					<img src="images/deposit.svg" className="service-image img-responsive img" alt=""/>
					</div>
					<div className="big-s ">
						<div className="service-title">
					
							<h2><b>निक्षेप सुविधा</b></h2>
						</div>

						<div className="service-text">
						
							<p>हाम्रो ग्राहकलाई सजिलो र छिटो हुने गरी निक्षेप सुबिधा उपलब्ध गराएका छाैं |</p>
						</div>
						<div className="service-button">
							<a name="" id="" className="btn btn-primary"  role="button">थप पढ्नुहोस्</a>	
						</div>
					</div>
			
			</div>
		</div>
		<div className="col-md-4 m-w3ls1 table-bordered">
			<div className="col-md">
			<h5><b>संस्थाबाट उपलब्ध गराइने रेमिटेन्स</b></h5>
			
					
					<div className="big-sm">
						
					
					<img src="./images/remitance1.jpg" className="image" alt="..."/>

					<img src="./images/remitance2.jpg" className="image" alt="..."/>
					<img src="./images/remitance3.jpg" className="image" alt="..."/>
					<img src="./images/remitance4.jpg" className="image" alt="..."/>
					<img src="./images/remitance5.jpg" className="image" alt="..."/>
					<img src="./images/remitance6.jpg" className="image" alt="..."/>
    
					</div>
			</div>
		</div>
	 */}
	</div>
</div>


	{/* services ends */}

	<br/>



{/* cards start */}
<section id="team">
        <div className="container my-3 py-5 text-center">
            <div className="row">

                <div className="col-lg-3 ">
                    <div className="card">
                        <div className="card-body">
						<img src="images/loan.svg" className="service-image img-responsive img" alt=""/>
						<div className="service-title">
									<h2><b>कर्जा सुविधा</b></h2>
								</div>
							<div className="service-text">
								<p>कर्जा लगानी संस्थाले कर्जा लगानीमा विभेदिकरणको सिद्धान्तलाई विशेष रुपमा पालना गर्दै तपशिल विवरणमा उल्लेखित कर्जा शिर्षकहरुमा कर्जा प्रवाह गर्दै आएको व्यहोरा अवगत गराउँदछौं ।</p>
							</div>
							<div className="service-button">
								<Link to='/loan'><a name="" id="" className="btn solo"  role="button">थप पढ्नुहोस्</a></Link>	
							</div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 ">
                    <div className="card">
                        <div className="card-body">
						<img src="images/deposit.svg" className="service-image img-responsive img" alt=""/>
						<div className="service-title">
					
					<h2><b>निक्षेप सुविधा</b></h2>
				</div>

				<div className="service-text">
				
					<p>हाम्रो ग्राहकलाई सजिलो र छिटो हुने गरी निक्षेप सुबिधा उपलब्ध गराएका छाैं |</p>
				</div>
				<div className="service-button">
					<Link to="/nispak"><a name="" id="" className="btn btn-primary solo"  role="button">थप पढ्नुहोस्</a>	</Link>
				</div>
                        </div>
                    </div>
                </div>

               <div className="col-lg-3 ">
                    <div className="card">
					<h4><b>संस्थाबाट उपलब्ध गराइने रेमिटेन्स</b></h4>
                        <div className="rem-card-body">
							<RemitanceSlider/>



			
  {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
     
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <Link to="/"> <img className="first-slide" src="images/prabhu.webp" height={200} width={300} alt="First slide"/></Link>
       
        </div>
        <div className="item">
         <Link to="/"> <img className="second-slide " src="images/remitance3.jpg"  height={200} width={300}alt="Second slide"/></Link>
         
        </div>
        <div className="item">
          <Link to="/"><img className="third-slide " src="images/western.webp" height={200} width={300} alt="Third slide"/></Link>
          
        </div>
		<div className="item">
          <Link to="/"><img className="fourth-slide " src="images/ime.webp"  height={200} width={300}alt="Third slide"/></Link>
          
        </div>
		<div className="item">
          <Link to="/"><img className="fifth-slide " src="images/remitance5.jpg" height={200} width={300} alt="Third slide"/></Link>
          
        </div>
		<div className="item">
          <Link to="/"><img className="sixth-slide " src="images/remitance6.jpg"  height={200} width={300}alt="Third slide"/></Link>
          
        </div>
      </div>
    
    </div> */}
						
						{/* <div>
        
        <Slider {...settings}>
          <div className='rem-slide'>
           <img src="images/remitance1.jpg" alt="remitance" />
          </div>
          <div className='rem-slide'>
		  <img src="images/remitance2.jpg" alt="remitance" />
          </div>
          <div className='rem-slide'>
		  <img src="images/remitance3.jpg" alt="remitance" />
          </div>
          <div className='rem-slide'>
		  <img src="images/remitance4.jpg" alt="remitance" />
          </div>
          <div className='rem-slide'>
		  <img src="images/remitance5.jpg" alt="remitance" />
          </div>
          <div className='rem-slide'>
		  <img src="images/remitance6.jpg" alt="remitance" />
          </div>
          
        </Slider>
      </div>	 */}

							
                        	{/* <img src="./images/remitance1.jpg" className="image" alt="..."/>
	
							<img src="./images/remitance2.jpg" className="image" alt="..."/>
							<img src="./images/remitance3.jpg" className="image" alt="..."/>
							<img src="./images/remitance4.jpg" className="image" alt="..."/>
							<img src="./images/remitance5.jpg" className="image" alt="..."/>
							<img src="./images/remitance6.jpg" className="image" alt="..."/> */}
		
						</div>
		
                           
                     
                    </div>
                </div>

            </div>
        </div>
    </section>
 

{/* cards ends */} 

<div className="container">
<div className="line">
		</div>
</div>

	
	{/* <div className="content-mid">
	<div className="container">
		
		<div className="col-md-4 m-w3ls">
			<div className="col-md1 ">
				<Link to="kitchen.html">
					<img src="images/co1.jpg" className="img-responsive img" alt=""/>
					<div className="big-sa">
						<h6>नयाँ सेवाहरू</h6>
						<h3>वित्त<span>पोषण </span></h3>
						<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
					</div>
				</Link>
			</div>
		</div>
		<div className="col-md-4 m-w3ls1">
			<div className="col-md ">
				<Link to="hold.html">
					<img src="images/co.jpg" className="img-responsive img" alt=""/>
					<div className="big-sale">
						<div className="big-sale1">
							<h3>ठूलो<span>प्रस्ताव</span></h3>
							<p>It is a long established fact that a reader </p>
						</div>
					</div>
				</Link>
			</div>
		</div>
		<div className="col-md-4 m-w3ls">
			<div className="col-md2 ">
				<Link to="kitchen.html">
					<img src="images/co3.jpg" className="img-responsive img1" alt=""/>
					<div className="big-sale2">
						<h3>काम <span>बनाउने</span></h3>
						<p>It is a long established fact that a reader </p>		
					</div>
				</Link>
			</div>
			<div className="col-md3 ">
				<Link to="hold.html">
					<img src="images/co3.jpg" className="img-responsive img1" alt=""/>
					<div className="big-sale3">
						<h3>माग<span>लागत</span></h3>
						<p>It is a long established fact that a reader </p>
					</div>
				</Link>
			</div>
		</div>
		<div className="clearfix"></div>
	</div> */}
{/* </div> */}



{/* <QuickLinks/> */}



 

<Footer1/>

    <div className='translate'>भाषा परिवर्तन गर्नुहोस्

        <Link to="/homepage1"><input type="submit" value="इंग्लिश "/></Link>
        <Link to="/"><input type="submit" value="नेपाली  "/></Link>
    </div>
   </>
  )
}

export default Homepage1