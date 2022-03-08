import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../dashboard/Footer'
import Navbar from '../dashboard/Navbar'
import Brands from './Brands'

const Homepage = () => {
  return (
    <>

    <Navbar/>

    <br/>
    <br/>
   
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <Link to=""> <img className="first-slide" src="images/ba.jpg" alt="First slide"/></Link>
       
        </div>
        <div className="item">
         <Link to=""> <img className="second-slide " src="images/ba1.jpg" alt="Second slide"/></Link>
         
        </div>
        <div className="item">
          <Link to=""><img className="third-slide " src="images/ba2.jpg" alt="Third slide"/></Link>
          
        </div>
      </div>
    
    </div>
    <br/>
    <br/>
    <br/>

    <div className="product">
		<div className="container">
			<div className="spec ">
				<h3>Our Services</h3>
				<div className="ser-t">
					<b></b>
					<span><i></i></span>
					<b className="line"></b>
				</div>
			</div>
				<div className=" con-w3l">
							<div className="col-md-3 pro-1">
								<div className="col-m">
								<Link to="/solo" data-toggle="modal" data-target="#myModal17" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">Moisturiser</Link></h6>							
										</div>
										<div className="mid-2">
											<div className="clearfix"></div>
										</div>
											<div className="add add-2">
										  
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3 pro-1">
								<div className="col-m">
									<Link to="/solo" data-toggle="modal" data-target="#myModal18" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">  Lady Finger</Link></h6>							
										</div>
										<div className="mid-2">
										
											  
											<div className="clearfix"></div>
										</div>
											<div className="add">
										   </div>
									</div>
								</div>
							</div>
							<div className="col-md-3 pro-1">
								<div className="col-m">
									<Link to="/solo" data-toggle="modal" data-target="#myModal19" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo"> Ribbon</Link></h6>							
										</div>
										<div className="mid-2">
											
											<div className="clearfix"></div>
										</div>
											<div className="add">
										  	</div>
									</div>
								</div>
							</div>
							<div className="col-md-3 pro-1">
								<div className="col-m">
									<Link to="/solo" data-toggle="modal" data-target="#myModal20" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">Grapes</Link></h6>							
										</div>
										<div className="mid-2">
											 
											<div className="clearfix"></div>
										</div>
											<div className="add">
										   	</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-3 pro-1">
								<div className="col-m">
								<Link to="/solo" data-toggle="modal" data-target="#myModal21" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">Clips</Link></h6>							
										</div>
										<div className="mid-2">
											 
											<div className="clearfix"></div>
										</div>
											<div className="add">
										  	</div>
									</div>
								</div>
							</div>
							<div className="col-md-3 pro-1">
								<div className="col-m">
									<Link to="/solo" data-toggle="modal" data-target="#myModal22" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">Conditioner</Link></h6>							
										</div>
										<div className="mid-2">
											  
											<div className="clearfix"></div>
										</div>
											<div className="add">
										 	</div>
									</div>
								</div>
							</div>
							<div className="col-md-3 pro-1">
								<div className="col-m">
									<Link to="/solo" data-toggle="modal" data-target="#myModal23" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">Cleaner</Link></h6>							
										</div>
										<div className="mid-2">
												 
											<div className="clearfix"></div>
										</div>
											<div className="add">
										  	</div>
									</div>
								</div>
							</div>
							<div className="col-md-3 pro-1">
								<div className="col-m">
									<Link to="/solo" data-toggle="modal" data-target="#myModal24" className="offer-img">
										<img src="images/of.png" className="img-responsive" alt=""/>
									</Link>
									<div className="mid-1">
										<div className="women">
											<h6><Link to="/solo">Gel</Link></h6>							
										</div>
										<div className="mid-2">
										  
											<div className="clearfix"></div>
										</div>
											<div className="add">
										  	</div>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						 </div>
		</div>
	</div>
	<br/>
	<div className="content-mid">
	<div className="container">
		
		<div className="col-md-4 m-w3ls">
			<div className="col-md1 ">
				<Link to="kitchen.html">
					<img src="images/co1.jpg" className="img-responsive img" alt=""/>
					<div className="big-sa">
						<h6>New Services</h6>
						<h3>Finance<span>ing </span></h3>
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
							<h3>Big <span>Offer</span></h3>
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
						<h3>Making <span>Work</span></h3>
						<p>It is a long established fact that a reader </p>		
					</div>
				</Link>
			</div>
			<div className="col-md3 ">
				<Link to="hold.html">
					<img src="images/co3.jpg" className="img-responsive img1" alt=""/>
					<div className="big-sale3">
						<h3>Demand<span>Cost</span></h3>
						<p>It is a long established fact that a reader </p>
					</div>
				</Link>
			</div>
		</div>
		<div className="clearfix"></div>
	</div>
</div>
  <br/>
  <br/>
  <br/>
    
    <Footer/>

	<div className='translate'>
		<h1>change the Language: </h1>
		<Link to="/homepage1"><input type="submit" value="English"/></Link>
		<Link to="/"><input type="submit" value="Nepali"/></Link>
	</div>
    </>
  )
}

export default Homepage