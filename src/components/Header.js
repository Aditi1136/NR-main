import { useContext, useState } from "react"
import Logos from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Logo =() =>{
    return (
     <a href="/">
     <img alt="logo" className="w-28" src={Logos} />
     </a>
    )
 }
 

 const Header = () => {
     const [isLoggedIn, setIsLoggedIn] = useState(false)
     
     const {userDetails} = useContext(UserContext)
     return (
     <div className="flex mx-3 justify-between">
     <Logo />
     <div className="flex items-center">
     <ul className="flex  text-lg">
        <li className="px-3 py-2"><Link to ="/"> Home</Link></li>
        <li className="px-3 py-2"> <Link  to ="/about"> About</Link></li>
        <li className="px-3 py-2"><Link to ="/contact"> Contact</Link></li>
        <li className="px-3 py-2"><Link to ="/instamart"> InstaMart</Link></li>
         <li className="px-3 py-2">Cart</li>
         {
            (isLoggedIn)? <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded"onClick={()=>{
                setIsLoggedIn(false)
            }}>Logout</button>: <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded" onClick={()=>{
                setIsLoggedIn(true)
            }}>Login</button>
         }
        <li className="px-3 py-2">{userDetails}</li>
        
     </ul>
     
     </div>
     </div>
     ) 
     
 }

 export default Header;