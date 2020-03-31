import React from 'react';
import { 
    List, Datagrid, TextField, EditButton,
    TextInput, ReferenceInput, ArrayInput, SelectInput, 
    Edit, Create, Filter, 
    SimpleFormIterator, TabbedForm, FormTab 
} from 'react-admin';
import {EditToolbar, CreatToolbar} from '../component/toolbar';

const MessageTitle = ({record})=>{
    return <span>{record ? `${record.description}` : 'Edit Message'}</span>
};

const MessageFilter = (props) =>(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const MessageList = props =>(
    <List filters={<MessageFilter />}{...props}>
        <Datagrid>
            <TextField source="id"/> 
            <TextField source="description"/>   
            <TextField label={"First Content"} source={"contents[0].value"} />
            <TextField label={"Answer Type"} source={"answerType"} />
            <EditButton/>
        </Datagrid>
    </List>
);


export const MessageEdit = props =>(
    <Edit title={<MessageTitle />} {...props}>
        <TabbedForm toolbar={<EditToolbar/>}>
            <FormTab label="Static Message">
                <TextInput disabled source="id" />
                <TextInput source="description" />
                <SelectInput source="answerType" choices={[
                    {id: "Option", name: "Option"},
                    {id: "Text", name: "Text"},
                    { id: "OptionText", name: "Option And Text"}
                ]}/>
            </FormTab>
            <FormTab label="Message Contents">
                <ArrayInput source="contents">
                    <SimpleFormIterator>
                        <SelectInput source="type" label="Content Render Type" choices={[
                            {id: "Text", name: "Text"},
                            {id: "Image", name: "Image"},
                            {id: "Link", name: "Link"}
                        ]}/>
                        <TextInput multiline source="value" label="Content Value"/>
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
            <FormTab label="Message Options">
                <ArrayInput source="options" allowEmpty>
                    <SimpleFormIterator>
                        <ReferenceInput label="Jump to message" source="nextMessageId" reference="StaticMessages">
                            <SelectInput optionText="description"/>
                        </ReferenceInput>
                        <TextInput multiline label="Hint" source="hint" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const MessageCreate = props => (
    <Create {...props}>
        <TabbedForm toolbar={<CreatToolbar/>}>
            <FormTab label="Static Message">
                <TextInput disabled source="id" />
                <TextInput source="description" />
                <SelectInput source="answerType" choices={[
                    {id: "Option", name: "Option"},
                    {id: "Text", name: "Text"},
                    { id: "OptionText", name: "Option And Text"}
                ]}/>
            </FormTab>
            <FormTab label="Message Contents">
                <ArrayInput source="contents">
                    <SimpleFormIterator>
                        <SelectInput source="type" label="Content Render Type" choices={[
                            {id: "Text", name: "Text"},
                            {id: "Image", name: "Image"},
                            {id: "Link", name: "Link"}
                        ]}/>
                        <TextInput multiline source="value" label="Content Value"/>
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
            <FormTab label="Message Options">
                <ArrayInput source="options" allowEmpty>
                    <SimpleFormIterator>
                        <ReferenceInput label="Jump to message" source="nextMessageId" reference="StaticMessages">
                            <SelectInput optionText="description"/>
                        </ReferenceInput>
                        <TextInput multiline label="Hint" source="hint" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Create>
);
