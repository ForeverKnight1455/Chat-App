import {useEffect} from 'react';

import { useChatStore } from '../store/useChatStore';

import ChatHeader from './ChatHeader.jsx';
import MessageInput from './MessageInput.jsx';
import MessageSkeleton from './skeletons/MessageSkeleton.jsx';

const ChatContainer = () => {
  const {messages,getMessages,isLoadingMessages,selectedUser} = 
  useChatStore();

  useEffect(()=>{
    getMessages(selectedUser._id);
  },[selectedUser._id,getMessages]);

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader/>
       {isLoadingMessages ? <MessageSkeleton/> : ""}
      <MessageInput/>
    </div>
  );
}

export default ChatContainer;
