const Logo =() =>{
    return (
     <a href="/">
     <img alt="logo" className="logo" src="https://s3.amazonaws.com/zaubatrademarks/f112b91b-ddb5-4696-9e73-9a7c7fc6078a.png" />
     </a>
    )
 }
 
 const Header = () => {
     return (
     <div className="header">
     <Logo />
     <div className="nav-items">
     <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
     </ul>
     </div>
     </div>
     ) 
     
 }

 export default Header;