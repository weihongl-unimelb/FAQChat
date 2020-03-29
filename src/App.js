// in src/App.js
import React from 'react';
import {Admin, Resource, ListGuesser } from 'react-admin';

// import simpleRestProvider  from 'ra-data-simple-rest';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/AccessibilityNew';
import Dashboard from './Dashboard';

import {QuestionList, QuestionEdit, QuestionCreate} from './resources/questions';
import {QuestionTopicList, QuestionTopicEdit, QuestionTopicCreate} from './resources/questionTopics';
import {MessageList, MessageEdit, MessageCreate} from './resources/message';
import myDataProvider from './tools/NewDataProvider';


const dataProvider = myDataProvider;
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="Questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} icon={PostIcon} />
        <Resource name="QuestionTopics" list={QuestionTopicList} edit={QuestionTopicEdit} create={QuestionTopicCreate}/>
        <Resource name="StaticMessages" list={MessageList} edit={MessageEdit} create={MessageCreate}/>
        <Resource name="MessageOptions" />
    </Admin>
);

export default App;