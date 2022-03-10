import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Bod from './pages/Bod'
import Contacts from './pages/Contacts'
import Codes from './pages/Codes'
import Solo from './pages/Solo'
import Register1 from './pages/Register1'
import Register3 from './pages/Register3'
import Registerf from './pages/Registerf'
import About1 from './pages/About1'

import Codes1 from './pages/Codes1'
import Homepage1 from './pages/Homepage1'
import Solo1 from './pages/Solo1'
import Contacts1 from './pages/Contacts1'
import Login1 from './pages/Login1'
import Register101 from './pages/Register101'
import Register102 from './pages/Register102'
import Register103 from './pages/Register103'
import Register104 from './pages/Register104'
import Dir1 from './Components/Dir1'
import Dir2 from './Components/Dir2'


import Persion from './NewPages/Persion'
import Directors from './NewPages/Directors'
import NavTop from './dashboard/NavTop'

import DirSaying from './AboutFiles/DirSaying'
import Introduction from './AboutFiles/Introduction'

import NisPakSer from './AboutFiles/NisPakSer'
import Loanfas from './AboutFiles/Loanfas'
import Carousels from './AboutFiles/Carousel'
import Objective from './AboutFiles/Objective'
import Members from './AboutFiles/Members'
import Punji from './YogdanFiles/Punji'
import Biwarand from './YogdanFiles/Biwarand'
import Gallery from './Gallery/Gallery'




const Routes = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage1}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/bod" component={Bod}/>
        <Route exact path="/contact" component={Contacts}/>
        <Route exact path="/codes" component={Codes}/>
        <Route exact path="/solo" component={Solo}/>
        <Route exact path="/homepage" component={Homepage}/>

        <Route exact path="/reg1" component={Register1}/>
        <Route exact path="/reg2" component={Register3}/>
        <Route exact path="/reg3" component={Registerf}/>
        <Route exact path="/about1" component={About1}/>
       
        <Route exact path="/codes1" component={Codes1}/>
        <Route exact path="/homepage1" component={Homepage}/>
        <Route exact path="/solo1" component={Solo1}/>
        <Route exact path="/contacts1" component={Contacts1}/>
        <Route exact path="/login1" component={Login1}/>
        <Route exact path="/register101" component={Register101}/>
        <Route exact path="/register102" component={Register102}/>
        <Route exact path="/register103" component={Register103}/>
        <Route exact path="/register104" component={Register104}/>
     
        <Route exact path="/navtop" component={NavTop}/>
        
        <Route exact path="/dirsaying" component={DirSaying}/>
        <Route exact path="/introduction" component={Introduction}/>
        <Route exact path="/loan" component={Loanfas}/>
        <Route exact path="/nispak" component={NisPakSer}/>
        <Route exact path="/carousels" component={Carousels}/>
        <Route exact path="/objective" component={Objective}/>
        <Route exact path="/members" component={Members}/>
        <Route exact path="/punji" component={Punji}/>
        <Route exact path="/biwarand" component={Biwarand}/>
        <Route exact path="/gallery" component={Gallery}/>







        <Route exact path="/kushal" component={Dir1}/>
        <Route exact path="/kabita" component={Dir2}/>



        
        <Route exact path="/persion" component={Persion}/>
        <Route exact path="/directors" component={Directors}/>




        
        </Switch>
    </Router>
    
    </>
  )
}

export default Routes