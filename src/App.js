// in src/App.js
import React from 'react';
import {Admin, Resource, ListGuesser } from 'react-admin';

// import simpleRestProvider  from 'ra-data-simple-rest';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/AccessibilityNew';
import Dashboard from './Dashboard';

import {QuestionList, QuestionEdit, QuestionCreate} from './questions';
import {QuestionTopicList, QuestionTopicEdit, QuestionTopicCreate} from './questionTopics';
import {MessageList} from './message';
import myDataProvider from './NewDataProvider';


// const dataProvider = simpleRestProvider('http://ocapi20200225090922.azurewebsites.net/faq');

const dataProvider = myDataProvider;
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="QuestionTopics" list={QuestionTopicList} edit={QuestionTopicEdit} create={QuestionTopicCreate}/>
        <Resource name="Questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} icon={PostIcon}/>
        <Resource name="StaticMessages" list={MessageList} />
        <Resource name="MessageOptions" />
    </Admin>
);

export default App;