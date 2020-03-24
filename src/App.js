// in src/App.js
import React from 'react';
import {Admin, Resource, fetchUtils, ListGuesser } from 'react-admin';
// import {PostList, PostEdit, PostCreate} from './posts';
import {QuestionList, QuestionEdit, QuestionCreate} from './questions';
// import simpleRestProvider  from 'ra-data-simple-rest';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/AccessibilityNew';
import Dashboard from './Dashboard';
import {QuestionTopicList, QuestionTopicEdit, QuestionTopicCreate} from './questionTopics';
import myDataProvider from './NewDataProvider';


// const dataProvider = simpleRestProvider('http://ocapi20200225090922.azurewebsites.net/faq');

const dataProvider = myDataProvider;
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="QuestionTopics" list={QuestionTopicList} edit={QuestionTopicEdit} create={QuestionTopicCreate}/>
        <Resource name="Questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} icon={PostIcon}/>
    </Admin>
);

export default App;