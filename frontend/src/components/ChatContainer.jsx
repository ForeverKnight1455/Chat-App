import {useEffect} from 'react';

import { useChatStore } from '../store/useChatStore.js';
import { useAuthStore } from '../store/useAuthStore.js';

import ChatHeader from './ChatHeader.jsx';
import MessageInput from './MessageInput.jsx';
import MessageSkeleton from './skeletons/MessageSkeleton.jsx';

const ChatContainer = () => {
  const { authUser } = useAuthStore();
  const { messages,getMessages,isLoadingMessages,selectedUser } = 
  useChatStore();
  useEffect(()=>{
    getMessages(selectedUser._id);
  },[selectedUser._id,getMessages]);

  if(isLoadingMessages){
    return (  
      <div className='flex-1 flex flex-col overflow-auto'>
        <ChatHeader/>
        <MessageSkeleton/>
        <MessageInput/>
      </div>
    );
  } 
  
  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader/>
        <div className='flex-1 overflow-y-auto p-4 space-y-4 overflow-auto'>
          {messages.map((message) => 
            <div
              key={message._id}
              className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            >
              <div className='chat-image avatar'>
                <div className='size-10 rounded-full border'>
                  <img
                    src={message.senderId === authUser._id ? 
                      authUser.profilePic || '/images.png' : selectedUser.profilePic || '/images.png'}
                    alt="profile pic"
                  />
                </div>
              </div>
              <div className='chat-header mb-1'>
                <time className='text-xs opacity-50 ml-1'>
                  {new Date(message.createdAt).toLocaleString()}
                </time>
              </div>
              <div className='chat-bubble flex flex-col'>
                {message.image && (
                  <img
                    src={message.image}
                    alt="attachment"
                    className='sm:max-w-[200px] rounded-md mb-2'
                  />
                )}
                {message.text}
              </div>
            </div>
          )}
        </div>
      <MessageInput/>
    </div>
  );
}

export default ChatContainer;