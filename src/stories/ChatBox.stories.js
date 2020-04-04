import React from 'react';
import { action } from '@storybook/addon-actions';
import { ChatBox, Clock, ChatBoxSwitch } from './ChatBox';

export default {
  title: 'ChatBox',
  component: ChatBox,
  excludeStories: /.*Data$/,
};

export const Default = () => 
  <ChatBox title="Click me" 
           initMessages={['Hi Shane,', 
                          'How about this chat box UI ?',
                          'Any suggestions ?']}/>
const EClock = () => <Clock></Clock>;
export const EChatBoxSwitch = () => <ChatBoxSwitch unreadMessageNum={2}></ChatBoxSwitch>
