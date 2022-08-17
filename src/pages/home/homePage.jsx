import React from "react";
import Impression from "./impression";
import styles from "../pages.module.css"
// import Post from "../post";
import Post from "./post";
import Feeds from "./feeds";
import Messages from "../../components/messages";


const HomePage=()=>{




    return(<>
  <div className={styles.main}>

        <div className={styles.impression}>
        <Impression/>
        </div>

        <div className={styles.post}>
        <Post/>
        </div>

        <div className={styles.feeds}>
            <Feeds/>
        </div>

        <div className={styles.messages}>
            <Messages/>
        </div>

    </div>
    </>);
}

export default HomePage;



