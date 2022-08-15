import React from "react";
import Impression from "../components/impression";
import styles from "../components/container.module.css";
import Post from "../components/post";
import Feeds from "../components/feeds";
import Messages from "../components/messages";


const HomePage=()=>{




    return(<>
  
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
    </>);
}

export default HomePage;