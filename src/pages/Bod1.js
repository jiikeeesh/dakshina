import{ React ,useState} from 'react'
import Footer1 from '../dashboard/Footer1'
import Navbar1 from '../dashboard/Navbar1'
import Directors from '../NewPages/Directors'
import Board from '../Api/BodApi'


const Bod1 = () => {
    const [boardDir, setBoardDir]=useState(Board)
    
    const FilterItems=(category)=>{
        const updatedItems=Board.filter((curElem)=>{
            return curElem.category===category;
        })
        setBoardDir(updatedItems);
    }
  return (
    <>
    <Navbar1/>
    <br/>
    <br/>
    <br/>


    <Directors  boardDir={boardDir}/>


    <Footer1/>
    </>
  )
}

export default Bod1