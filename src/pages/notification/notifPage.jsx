import React from 'react';
import NotifSettings from './notifSettings';
import NewNotif from './newNotif';
import SeeWho from './seeWho';
import Messages from '../../components/messages';


const NotifPage = () => {
  return (
    <div>
        NotificationPage
        <NotifSettings/>
        <NewNotif/>
        <SeeWho/>
        <Messages/>

        
    </div>
  )
}

export default NotifPage