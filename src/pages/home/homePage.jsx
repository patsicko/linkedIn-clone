import React from "react";
import Impression from "./impression";
import styles from "../pages.module.css"
import Post from "./post";
import Feeds from "./feeds";
import Messages from "../../components/messages";


const HomePage=()=>{




    return(<>
  <div className={styles.HomeMain}>

        <div className={styles.impression}>
        MANIBAHO Patrick
        <Impression/>
       
        </div>

        <div className={styles.post}>
            Start a post
        <Post/>
        </div>

        <div className={styles.feeds}>
            Add your feed
            <Feeds/>
        </div>

        {/* <div className={styles.messages}>
           
            <Messages/>
        </div> */}

    </div>
    </>);
}

export default HomePage;



