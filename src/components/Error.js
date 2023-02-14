import { useRouteError } from "react-router-dom";

const Error = () =>{
    
    const err = useRouteError();
    const {status, statusText} = err;
    console.log(err)
    
    return (
        <>
        <h1>Oops, this page doesnot exist</h1>
        <h2>{err.status + " : " + err.statusText}</h2>
        </>
    )
}

export default Error;