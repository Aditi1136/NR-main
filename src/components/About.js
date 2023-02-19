import { Outlet } from "react-router";
import Profile from "./ProfileClass";


const About = () =>{
    return (
        <>
        <h1>About Us page</h1>
        <Outlet/>
        </>
    )
}

export default About;