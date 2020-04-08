import React from 'react';
import { action } from '@storybook/addon-actions';
import { ChatBox, ChatBoxSwitch, Message, MessageOption } from './ChatBox';

export default {
  title: 'ChatBox',
  component: ChatBox,
  excludeStories: /.*Data$/,
};

export const Default = () => <ChatBox title="Click me" initMessages={messages} initOptions={options} />

export const DefaultChatBoxSwitch = () => <ChatBoxSwitch unreadMessageNum={2}></ChatBoxSwitch>;
export const DefaultMessage = () => <Message messages={messages} options={options}/>;
export const DefaultMessageOption = () => <MessageOption options={options}/>;

const messages = ['Hi Shane,',
                  'How about this chat box UI ?',
                  'Any suggestions ?'];
const options = [{id: 1, hint: 'Change a color'},
                 {id: 2, hint: 'Box too big'},
                 {id: 3, hint: 'Emm...'}];

class ChatApi {
  addr = "http://ocapi20200225090922.azurewebsites.net/faq"
  currMessage
  selectedOptionId
  sendMessage = inputMessage => {

  }

}