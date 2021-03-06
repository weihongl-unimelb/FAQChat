import React from 'react';
import { List, Datagrid, TextField, ImageField, Edit, Create, 
    TextInput, SimpleForm, Filter, ImageInput, EditButton } from 'react-admin';
import {EditToolbar, CreatToolbar} from '../component/toolbar';

const QuestionTopicTitle = ({record})=>{
    return <span>Edit {record ? `${record.name}` : ''}</span>
};

const QuestionTopicFilter = (props) =>(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const QuestionTopicList = props =>(
    <List filters={<QuestionTopicFilter />} {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" />
            <ImageField label="Topic Image" source="icon.url"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const QuestionTopicEdit = props =>(
    <Edit title={<QuestionTopicTitle/>} {...props}>
        <SimpleForm toolbar={<EditToolbar/>}>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ImageInput source="icon" label="Topic Picture" accept="image/*">
                <ImageField source="url" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const QuestionTopicCreate = props =>(
    <Create {...props}>
        <SimpleForm toolbar={<CreatToolbar/>}>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ImageInput source="icon" label="Topic Picture" accept="image/*">
                <ImageField source="url" />
            </ImageInput>
        </SimpleForm>
    </Create>
);