import React from "react";
import Header from "./header";
import HomePage from "../pages/HomePage";
import styles from "./container.module.css";


const Container=()=>{

    return(<>
    
    <Header/>
   
    <div className={styles.main}>
     <HomePage/>
    </div>


    </>);
}

export default Container;