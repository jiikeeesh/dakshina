import React, { useState } from 'react'
import Navbar1 from '../dashboard/Navbar1'
import Footer1 from '../dashboard/Footer1'
import { Link } from 'react-router-dom'

const MainRegistration = () => {
    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]= useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={firstName, lastName, email, password}
        console.log(user)

        fetch('http://localhost:8080/api/dakshina/register',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log('new user added')
        })

    }




  return (
    <>
     <Navbar1/>
    
    <div className="login">
		<div className="main-agileits">
				<div className="form-w3agile form1">
					<h3>दर्ता गर्नुहोस्</h3>
					<form action="#" method="post">
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text"  name="Fristname" 
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            
                            />
							<div className="clearfix"></div>
						</div>
						
						<div className="key">
							<i className="fa fa-user" aria-hidden="true"></i>
							<input  type="text"  name="LastName" 
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            />
							<div className="clearfix"></div>
						</div>
                        <div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text" placeholder='इमेल' name="Email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            
                            />
							<div className="clearfix"></div>
						</div>
                        <div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password" placeholder='password' name="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            
                            />
							<div className="clearfix"></div>
						</div>
                        <button className="btn btn-primary" onClick={handleSubmit}>पेश गर्नुहोस्</button>
						
						{/* <Link to="/register103"><input type="submit" value="पेश गर्नुहोस्"
                        onClick={handleSubmit}
                        /></Link> */}
					</form>
				</div>
				
			</div>
		</div>
    <Footer1/>
    </>
  )
}

export default MainRegistration