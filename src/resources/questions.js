import React from 'react';
import { 
    List, Datagrid, TextField, DateField, ReferenceField, BooleanField,
    TextInput, ReferenceInput, SelectInput, NumberInput, BooleanInput,
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

const RankField = ({ source, record = {} }) => <span>{record[source] === 2147483647? "   ": record[source]}</span>;

export const QuestionList = props =>(
    <List filters={<QuestionFilter />}{...props}>
        <Datagrid>
            <RankField source="rank"/>
            <TextField source="description" />
            <ReferenceField label="Question Topic" source="questionTopicId" reference="QuestionTopics" link={false}>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="content" />
            <DateField source="updateTime" label="Date" />
            <BooleanField source="active"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const QuestionEdit = props =>(
    <Edit title={<QuestionTitle />} {...props}>
        <SimpleForm toolbar={<EditToolbar/>}>
            <BooleanInput source="active" helperText={"Inactive questions are hidden from User"} />
            <NumberInput source="rank" step={1}
                helperText={"Only top of questions will be showed in the FAQ main page, ordered by rank and update time"}/>
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
            <BooleanInput source="active" helperText={"Inactive questions are hidden from User"} />
            <NumberInput source="rank" step={1}
                helperText={"Only top of questions will be showed in the FAQ main page, ordered by rank and update time"}/>
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <RichTextInput source="answer"/>
        </SimpleForm>
    </Create>
);