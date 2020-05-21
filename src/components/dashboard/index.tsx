import React from 'react';
import TopNav from "./topnav";
import Sidebar from "./sidebar";
import Container from "./container";
class Home extends React.Component{
    render(){
        return(

            <div className="bodycontainer">
            <TopNav />
            <Sidebar />
            <Container />
            </div>

        )
    }
}
export default Home;