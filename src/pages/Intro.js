import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
	<div className="footer  back-color">
	<div className="container">
		<div className="col-md-3 footer-grid">
			<div className="intro-image">
				<img src="images/main-director.png" alt="" />
			</div>

		</div>
		<div className="col-md-3 footer-grid ">
				<div className="intro-title">
					<h4><b>प्रमुख कार्यकारी अधिकृतको भनाई</b></h4>
				</div>
				<div className="intro-text">
					<p>हाम्रो संस्था संचालन अवधिकोे २१औं वर्ष पूरा गरी २२औं वर्षमा प्रवेश गरेको सुखद खबर आदरणीय शेयरसदस्यहरु महानुभावहरु समक्ष जानकारी गराउन पाउँदा मलाई अत्यन्तै खुसि लागेको छ ।</p>
				</div>
				<div className="intro-button">
					<Link to="/dirsaying"><button className="btn  solo back-color" >थप पढ्नुहोस्</button></Link>
				</div>
		</div>
		<div className="col-md-3 footer-grid ">
		<div className="intro-image">
				<img src="images/ki6.jpg" alt="" />
		</div>
	
		</div>
		<div className="col-md-3 footer-grid">
		<div className="intro-title">
					<h4><b>परिचय</b></h4>
				</div>
				<div className="intro-text">
<p>देशमा स्थापना भएका वित्तिय संस्था, विकास बैंक तथा वाणिज्य बैंकहरूले मात्र कमजोर अवस्थामा रहेको राष्ट्रिय अर्थतन्त्रलाई अपेक्षाकृत रुपमा सुधारात्मक दिशातर्फ अगाडी बढाउन</p>				</div>
				<div className="intro-button">
					<Link to="/introduction"><button className="btn  solo back-color">थप पढ्नुहोस्</button></Link>
				</div>
		</div>
		
					
	</div>
</div>
		



	{/* //main-intro/// */}
   

    </>
  )
}

export default Intro