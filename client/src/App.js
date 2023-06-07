import React from 'react';
import {StreamChat} from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelContainer,ChannelListContainer} from './components';
import './App.css';

const api_key = '4xk3j6uqp22c'
const client = StreamChat.getInstance(api_key);


const App = () => {
    
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer/>
            <ChannelContainer/>

        </Chat>
    </div>
  )
}

export default App