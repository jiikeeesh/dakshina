import React from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import NavTop from '../dashboard/NavTop'
import QuickLinks from '../Navfiles/QuickLinks'



import "./aboutfiles.css"

const FuturePlans = () => {
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
                    <div className="objective-text">
                    <h4>संस्थाको बहुउद्देश्यीय योजना अनुसार हामीले तपशिल विवरणमा उल्लेखित कार्यहरु क्रमशः संचालन गर्दै जाने लक्ष्य लिएको व्यहोरा अवगत गराउँदछौं ।</h4>           

                    </div>
                         
            <div className="dir-saying">
<ul>
    <li>काठमाण्डौं जिल्लाको थप २ स्थानमा सदस्य सुविधा काउण्टर संचालन गर्ने ।</li>
    <li>सहकारी क्षेत्रको सुदृढीकरणको लागि सम्बन्धित निकायमा दबाबमुलक तथा रचनात्मक भूमिका निर्वाह गर्ने ।</li>
    <li>सदस्यहरुलाई उपलब्ध गराउने सेवा तथा सुविधाहरुमा थप विस्तार गर्ने ।</li>
    <li>शेयरसदस्यहरुलाई सहकारी शिक्षा सम्बन्धी तालिम दिने ।</li>
    <li>अन्तर सहकारी सम्बन्धलाई थप विस्तार गर्ने ।</li>
    <li>हाम्रो सहकारीलाई नेपालको सहकारी आन्दोलनको नमुना सहकारीको रुपमा स्थापित गर्ने ।</li>
    <li>संस्थागत सामाजिक उत्तरदायित्व (Corporate Social Responsibility) सम्बन्धी कार्यहरुलाई थप प्रभावकारी रुपमा संचालन गर्ने ।</li>
    <li>कर्जा लगानीमा गुणस्तरीय सेवाहरु उपलब्ध गराउने र निक्षेप संकलनमा नयाँ नयाँ योजनाहरु ल्याउने ।</li>
</ul>
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

export default FuturePlans