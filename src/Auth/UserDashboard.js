import React from 'react'
import UserFooter from './UserFooter'
import UserNav from './UserNav'
import Sidebar from "./AuthComponents/sidebar/Sidebar";
import Topbar from "./AuthComponents/topbar/Topbar";

import Home from "./AuthPages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./AuthPages/userList/UserList";
import User from "./AuthPages/user/User";
import NewUser from "./AuthPages/newUser/NewUser";





const UserDashboard = () => {
  return (
      <>
  <UserNav/>
  <br/>
  <br/>
  <br/>


  <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        
       
       
        </Switch>
      </div>
    </Router>
  <br/>
  <br/>
  <br/>

  <UserFooter/>

  </>
  )
}

export default UserDashboard