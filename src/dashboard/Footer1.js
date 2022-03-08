import React from 'react'
import { Link } from 'react-router-dom'

const Footer1 = () => {
   
  return (
   <>
   
   <div className="footer">
	<div className="container">
		<div className="col-md-3 footer-grid">
			<h3>ठेगाना</h3>
			<ul>
				<li>ललितपुर जिल्ला , ललितपुर महानगरपालिका
वडा नं. - ३, पुल्चोक</li>
				
				<li>सम्पर्क नं: <span> ५४४६१८०, ५४०९०१२, ५४०९१०१, ५४३२८५५</span></li>
				<li>फ्याक्सः <span> ५४५४८८१</span></li>
				<li>पो.ब.नं. -  <span>८९७५, इ.पि.सी. २४४३</span></li>
				<li>shreelaligurans@gmail.com, info@shreelaligurans.coop</li>
			</ul>
			

		</div>
		<div className="col-md-3 footer-grid ">
			<h3>उपयोगी लिंक </h3>
			<ul>
				<li><Link to="/">नेपाल राष्ट्र बैंक लि.</Link></li>
				
				<li><Link to="/">सहकारी विभाग</Link></li>
									 
				<li><Link to="/"></Link>नेपाल बहुउद्देश्यीय केन्द्रीय सहकारी संघ लि.</li> 
				<li><Link to="/"></Link>राष्ट्रिय सहकारी महासंघ लिमिटेड नेपाल</li> 
				<li><Link to="/"></Link>भूमि व्यवस्था, सहकारी तथा गरिबी निवारण</li> 
				<li><Link to="/"></Link>मन्त्रालय</li> 
				<li><Link to="/"></Link>अर्थ मन्त्रालय</li> 
				<li><Link to="/"></Link>राष्ट्रिय सहकारी विकास बाेर्ड</li> 
				
			</ul>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>समाचार / सूचना</h3>
			<ul>
				
				<li><Link to="/">ब्याजदर ब्राेसर - २०७८-०६-०४ गतेदेखि लागु भएकाे</Link></li>
				<li><Link to="/">रक्तदान कार्यक्रम ०७७</Link></li>
				<li><Link to="/">Time Extension of TENDER NOTICE</Link></li>
				<li><Link to="/">गाईको दाना बनाउन प्रयोग हुने कच्चा पदार्थ र पशु चिकित्सा औषधी आपूर्र्ति सम्बन्धी कार्यको बोलपत्र आह्वान सम्बन्धी सूचना</Link></li>
				<li><Link to="/">सूची दर्ता गर्ने सम्बन्धी सूचना सबै हेर्नुहोस्सूची दर्ता गर्ने सम्बन्धी सूचना सबै हेर्नुहोस्</Link></li>
										 
				 
			</ul>
		</div>
		<div className="col-md-3 footer-grid">
			<h3>मेरो खाता</h3>
			<ul>
				<li><Link to="/login1">लग - इन</Link></li>
				<li><Link to="/register101">दर्ता गर्नुहोस्</Link></li>
				<li><Link to="/">भाषा परिवर्तन</Link></li>
				
				
			</ul>
		</div>
		<div className="clearfix"></div>
			<div className="footer-bottom">
				<h2 ><Link to="/homepage1">दक्षिणा <span>सहकारी </span></Link></h2>
				<p className="fo-para"></p>
				<ul className="social-fo">
					<li><Link to="#" className=" face"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
					<li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
				</ul>
				<div className=" address">
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-home" aria-hidden="true"></i>12K Street , 45 Building Road Canada.</p>
					</div>
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-phone" aria-hidden="true"></i>+1234 758 839 , +1273 748 730</p>	
					</div>
					<div className="col-md-4 fo-grid1">
						<p><Link to="mailto:info@example.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>info@example1.com</Link></p>
					</div>
					<div className="clearfix"></div>
					
					</div>
			</div>
		<div className="copy-right">
			<p> &copy;Dakshina Finance</p>
		</div>
	</div>
</div>

   </>
  )
}

export default Footer1