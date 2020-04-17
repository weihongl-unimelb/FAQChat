import React, { useState, Component, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { ChatBox, ChatBoxSwitch, Message, MessageOption } from './ChatBox';

export default {
  title: 'ChatBox',
  component: ChatBox,
  excludeStories: /.*Data$/,
};

export const Default = () => <ChatBox title="Click me" initMessages={messages} initOptions={options} />
// const API = 'https://ocapi20200225090922.azurewebsites.net/faq/Staticmessages/2';
// export const Default= ()=>{
//   const [messages, setMessages] = useState(null);
//   const [options, setOptions] = useState(null);

//   async function fetchMyAPI() {
//     let response = await fetch(API);
//     const json = await response.data;
//     console.log(json);
//     split(json);
//   }

//   useEffect(()=>{
//     fetchMyAPI();
//   },[]);
  
//   function split(data){
//     console.log('1111111111111');
//     if(data!=null){
//       let singleMessage
//       let singleOption;
//       data['messageContents'].map((msg)=>singleMessage.concat(msg));
//       data['messageOptions'].map((opt)=>singleOption.concat(opt));
//       setMessages(singleMessage);
//       setOptions(singleOption);
//     }
//   }
//   return(<ChatBox title="Click me" initMessages={messages} initOptions={options} />);
// }


export const DefaultChatBoxSwitch = () => <ChatBoxSwitch unreadMessageNum={2}></ChatBoxSwitch>;
export const DefaultMessage = () => <Message messages={messages} options={options}/>;
export const DefaultMessageOption = () => <MessageOption options={options}/>;

const messages = ['Hi Shane,',
                  'How about this chat box UI ?',
                  'Any suggestions ?'];
const options = [{id: 1, hint: 'Change a color', nextMessageId: 3},
                 {id: 2, hint: 'Box too big', nextMessageId: 4},
                 {id: 3, hint: 'Emm...', nextMessageId: 5}];

class ChatApi {
  addr = "http://ocapi20200225090922.azurewebsites.net/faq"
  currMessage
  selectedOptionId
  sendMessage = inputMessage => {

  }

}