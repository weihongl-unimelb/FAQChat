import React from 'react';
import { 
    List, Datagrid, TextField, DateField, ReferenceField, 
    TextInput, ReferenceInput, SelectInput,
    Edit, SimpleForm, Create, Filter, EditButton,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import {EditToolbar, CreatToolbar} from '../component/toolbar'

const QuestionTitle = ({record})=>{
    return <span>Edit {record ? `${record.description}` : ''}</span>
};

const QuestionFilter = (props) =>(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const QuestionList = props =>(
    <List filters={<QuestionFilter />}{...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="description" />
            <ReferenceField label="Question Topic" source="questionTopicId" reference="QuestionTopics" link={false}>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="content" />
            <DateField source="updateTime" label="Date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const QuestionEdit = props =>(
    <Edit title={<QuestionTitle />} {...props}>
        <SimpleForm toolbar={<EditToolbar/>}>
            <TextInput disabled source="id" />
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <RichTextInput source="answer"/>
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = props =>(
    <Create {...props}>
        <SimpleForm toolbar={<CreatToolbar/>} redirect="list">
            <TextInput disabled source="id" />
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <RichTextInput source="answer"/>
        </SimpleForm>
    </Create>
);