import React from "react";
import styles from "./container.module.css";
import profile from "../profile.jpg";


const Messages=()=>{



    return(<>
    
     <div className={styles.messageBox} >
      <img src={profile}/> <br />
      <hr/>
      <input type="text" placeholder="Search messages" />
     </div>

    </>);
}
export default Messages;