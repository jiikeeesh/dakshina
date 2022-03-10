import React from 'react'
import { Link } from 'react-router-dom'
import Board from '../Api/BodApi'
import Footer1 from '../dashboard/Footer1'
import "./director.css"


const Directors = ({boardDir}) => {
  
  return (
   <>
    
    <div className='product'>
    <div className="container">
    <div className=" con-w3l">
    
  
     {boardDir.map((curElem)=>{
           const userName=(curElem.name)

        
        
       return(
           <>
           
           <div className="col-md-3 pro-1">
		            <div className="col-m">
                                <Link to="/persion" data-toggle="modal" data-target="#myModal17" className="offer-img">
                                    <img src="images/of.png" className="img-responsive" alt=""/>
                                </Link>
							    <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/persion">{userName}</Link></h6>							
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
 
    
   
   </>
  )
}

export default Directors