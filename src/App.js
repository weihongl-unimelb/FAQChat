// in src/App.js
import React from 'react';
import {Admin, Resource, usePermissions } from 'react-admin';

// import simpleRestProvider  from 'ra-data-simple-rest';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';
import authProvider from './tools/auth';
import {QuestionList, QuestionEdit, QuestionCreate} from './resources/questions';
import {QuestionTopicList, QuestionTopicEdit, QuestionTopicCreate} from './resources/questionTopics';
import {MessageList, MessageEdit, MessageCreate} from './resources/message';
import myDataProvider from './tools/dataprovider';


const dataProvider = myDataProvider;
const App = () => { 
    const checkAdmin = (roles) => roles === "Admin" || roles.includes("Admin");
    return (
        <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
            {permissions => [
                <Resource name="Questions" list={QuestionList} edit={QuestionEdit} icon={PostIcon} 
                    create={checkAdmin(permissions)? QuestionCreate : null} />,
                <Resource name="QuestionTopics" list={QuestionTopicList} edit={QuestionTopicEdit} 
                    create={checkAdmin(permissions)? QuestionTopicCreate : null}/>,
                <Resource name="StaticMessages" list={MessageList} edit={MessageEdit}
                    create={checkAdmin(permissions)? MessageCreate : null}/>,
                <Resource name="MessageOptions" /> 
            ]}
        </Admin>
    );
    
};

export default App;