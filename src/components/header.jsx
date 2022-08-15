import React from "react";
import styles from "./container.module.css";
import {BsLinkedin} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {BsFillPeopleFill}  from "react-icons/bs";
import {BsFillBagDashFill} from "react-icons/bs";
import {AiFillMessage} from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import {CgMenuGridO} from "react-icons/cg";
import {AiFillCaretDown} from "react-icons/ai";




const Header=()=>{

    return(<>
  <div className={styles.header}>

      
   <div className={styles.headerContent}>

    <div className={styles.leftHead}>
     <div className={styles.logo}>
     <BsLinkedin className={styles.likedIn}/> 

     </div>

     <div className={styles.searchBar}>
    <AiOutlineSearch/>
    <input type="text" placeholder="search" />
     </div>
 </div>

 <div className={styles.middleHead}>
      <div className={styles.home}>
          <AiFillHome/> <br />
          
         <span> Home</span>
      </div>
     
     <div className={styles.network}>
      <BsFillPeopleFill/> <br /><span> My Network</span>
     </div>

     <div className={styles.jobs}>
        <BsFillBagDashFill/> <br /> <span>Jobs</span>
     </div>

     <div className={styles.messaging}>
     <AiFillMessage/> <br /> <span>Jobs</span>
     </div>
     <div className={styles.notifications}>
        <IoMdNotifications/> <br /> <span>Notifications</span>
     </div>

     <div className={styles.profile}>
     <CgProfile/>
     <div className={styles.me}>
      <span>Me</span> <AiFillCaretDown/>

     </div>
     </div>
      
 </div>
 
 <div className={styles.rightHead}>
   
   <div className={styles.works}>

     <CgMenuGridO/> <br />
     <span>Work</span> <AiFillCaretDown/>

   </div>
   <div className={styles.premium}>
      &nbsp;   <span>Try Premium for <br /> &nbsp; &nbsp;&nbsp; &nbsp;free</span>
   </div>

 </div>

</div>


  </div>

    </>);
}


export default Header;