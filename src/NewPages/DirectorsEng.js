import React from 'react'
import { Link } from 'react-router-dom'
import Footer1 from '../dashboard/Footer1'
import "./director.css"


const DirectorsEng = ({boardDir}) => {
  return (
   <>
    <div className="spec ">
		 <h3>Our Board of Directors</h3>
		<div className="ser-t">
            <b></b>
            <span><i></i></span>
            <b className="line"></b>
		</div>
	</div>
    <div className='product'>
    <div className="container">
    <div className=" con-w3l">
    
  
     {boardDir.map((curElem)=>{
       const userNmae= board.curElem.name
       console.log(userNmae)
       return(
           <>
           <div className="col-md-3 pro-1">
		            <div className="col-m">
                                <Link to="/solo1" data-toggle="modal" data-target="#myModal17" className="offer-img">
                                    <img src="images/of.png" className="img-responsive" alt=""/>
                                </Link>
							    <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/solo1">{curElem.name}</Link></h6>							
                                    </div>
                                    <div className="mid-2">
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="add add-2">
                                            
                                    </div>
							    </div>
                                </div>
                                </div>
           </>
       )
   })}
     
   
    </div>
    </div>
    </div>   
   
  <br/>
  <br/>
  <br/>
  <Footer1/>
    
	<div className='translate'>भाषा परिवर्तन गर्नुहोस्

        <Link to="/bod"><input type="submit" value="इंग्लिश "/></Link>
        <Link to="/bod1"><input type="submit" value="नेपाली  "/></Link>
    </div>
   
   </>
  )
}

export default DirectorsEng