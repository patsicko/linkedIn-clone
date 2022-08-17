

import React from 'react';
import Atlassian from './atlassian';
import Messaging from './messaging';
import Confluence from './confluence';
import Messages from '../../components/messages';

const MessagingPage = () => {
  return (
    <div>

        MessagingPage
        <Messaging/>
        <Atlassian/>
        <Confluence/>
        <Messages/>
        </div>
  )
}

export default MessagingPage