import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }

    render(){
        const {count}=this.state
        console.log(count)
        return (
            <>
        <h1>Hii: {count}</h1>
        <h2>{this.props.name}</h2>
        <button onClick={()=>{
            this.setState({
                count:1
            })
        }}>SetCount</button>
        </>

        )
        
    }
}

export default Profile