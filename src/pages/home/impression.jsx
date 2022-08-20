import React from "react";
import styles from "../pages.module.css";
import profile from "../../profile.jpg";


const Impression=()=>{


    return(
    <>
    
        <div className={styles.impression}>
          <img src={profile} alt="" />
        </div>


    
    </>);
}
export default Impression;