import { useState } from "react"
import Logos from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Logo =() =>{
    return (
     <a href="/">
     <img alt="logo" className="logo" src={Logos} />
     </a>
    )
 }
 

 const Header = () => {
     const [isLoggedIn, setIsLoggedIn] = useState(false)

     return (
     <div className="header">
     <Logo />
     <div className="nav-items">
     <ul>
        <li><Link to ="/"> Home</Link></li>
        <li><Link to ="/about"> About</Link></li>
        <li><Link to ="/contact"> Contact</Link></li>
         <li>Cart</li>
         {
            (isLoggedIn)? <button onClick={()=>{
                setIsLoggedIn(false)
            }}>Logout</button>: <button onClick={()=>{
                setIsLoggedIn(true)
            }}>Login</button>
         }
        
        
     </ul>
     
     </div>
     </div>
     ) 
     
 }

 export default Header;