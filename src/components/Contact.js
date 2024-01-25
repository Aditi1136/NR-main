import { useState } from "react";
import { CustomerDetails } from "../config";


const Contact = () =>{
    // const [searchT,setSearchT] = useState("")
    const [customer,setCustomer] = useState(CustomerDetails)

    const handleCustomer = ()=>{
        return(
        fetchDetails()
        )
    }

    const fetchDetails = () => {
        
    }
    return (
        <>
        <h1 className="text-xl">Contact us Page</h1>
        <div className="cursor-pointer" onClick={handleCustomer}>
        {CustomerDetails.map(item => (
            <ul>
                <li>{item.name}</li></ul>
        ))}
        </div>
        </>
    )
}

export default Contact;