import React from 'react';
import { Toolbar, SaveButton, ListButton, DeleteButton } from 'react-admin';


export const EditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton/>
        <section style={{ marginLeft: 'auto' }}>
            <ListButton label="Cancel" to={`/${props.resource}`}/>
            <DeleteButton style={{ marginLeft: 'auto' }}/>
        </section>
        
    </Toolbar>
);

export const CreatToolbar = props => (
    <Toolbar {...props}>
        <SaveButton/>
        <section style={{ marginLeft: 'auto' }}>
            <ListButton label="Cancel" to={`/${props.resource}`}/>
        </section>
    </Toolbar>
);