import React, { useState, Component, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { ChatBox, ChatBoxSwitch, Message, MessageOption } from './ChatBox';

export default {
  title: 'ChatBox',
  component: ChatBox,
  excludeStories: /.*Data$/,
};

const messages = ['Hi Shane,',
                  'How about this chat box UI ?',
                  'Any suggestions ?'];
const options = [{id: 1, hint: 'Change a color', nextMessageId: 3},
                 {id: 2, hint: 'Box too big', nextMessageId: 4},
                 {id: 3, hint: 'Emm...', nextMessageId: 5}];

const fetchData = async (id) => {
  const API = 'https://ocapi20200225090922.azurewebsites.net/faq/Staticmessages/' + id;
  const response = await fetch(API);
  const data = await response.json();
  return data;
}

export const Default = () => {
  return <ChatBox title="Click me" initMessageId={2} fetchMessage={fetchData}/>
}


export const DefaultChatBoxSwitch = () => <ChatBoxSwitch unreadMessageNum={2}></ChatBoxSwitch>;
export const DefaultMessage = () => <Message messages={messages} options={options}/>;
export const DefaultMessageOption = () => <MessageOption options={options}/>;



class ChatApi {
  addr = "http://ocapi20200225090922.azurewebsites.net/faq"
  currMessage
  selectedOptionId
  sendMessage = inputMessage => {

  }

}