import React from "react";
import Header from "./header";
import HomePage from "../pages/home/homePage";
import styles from "./container.module.css";
import {BrowserRouter as Router, Swith, Route,Link} from "react-router-dom"




const Container=()=>{

    return(<>
    <Router>

    <Header/>


    {/* <Route path="/homePage" component={<HomePage/>}/> */}
    
    
    </Router>
    </>);
}

export default Container;