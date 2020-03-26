import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, TextInput, ReferenceInput, 
    SelectInput,Edit, SimpleForm, Create, Filter, EditButton} from 'react-admin';

const MessageTitle = ({record})=>{
    return <span>Edit Message {record ? `${record.id}` : ''}</span>
};

const MessageFilter = (props) =>(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const MessageList = props =>(
    <List filters={<MessageFilter />}{...props}>
        <Datagrid>
            <TextField source="id" />
            
            <TextField label={"Content Type"} source={"contents[0].type"} />
            
            <TextField label={"Content"} source={"contents[0].value"} />
            <TextField label={"Answer Option"} source={"options[0].id"} />
            <TextField label={"Next Answer Option"} source={"options[0].nextMessageId"} />

            <EditButton />
        </Datagrid>
    </List>
);

export const QuestionEdit = props =>(
    <Edit title={<MessageTitle />}{...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <TextInput multiline source="answer" />
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <TextInput multiline source="answer" />
        </SimpleForm>
    </Create>
);