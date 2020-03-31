import React from 'react';
import { Toolbar, SaveButton, ListButton, DeleteButton, usePermissions } from 'react-admin';


export const EditToolbar = props => {
    const { loaded, permissions } = usePermissions();
    const permitted = permissions === 'Admin' || (permissions && permissions.includes('Admin'))
    return (
    <Toolbar {...props}>
        { permitted && <SaveButton/> }
        <section style={{ marginLeft: 'auto' }}>
            <ListButton label="Cancel" to={`/${props.resource}`}/>
            {permitted && <DeleteButton style={{ marginLeft: 'auto' }}/>}
        </section>
        
    </Toolbar>
)};

export const CreatToolbar = props => (
    <Toolbar {...props}>
        <SaveButton/>
        <section style={{ marginLeft: 'auto' }}>
            <ListButton label="Cancel" to={`/${props.resource}`}/>
        </section>
    </Toolbar>
);