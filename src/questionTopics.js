import React from 'react';
import { List, Datagrid, TextField, ImageField, Edit, Create, 
    TextInput, SimpleForm, Filter, ImageInput, EditButton } from 'react-admin';

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
        <SimpleForm>
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
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ImageInput source="icon" label="Topic Picture" accept="image/*">
                <ImageField source="url" />
            </ImageInput>
        </SimpleForm>
    </Create>
);