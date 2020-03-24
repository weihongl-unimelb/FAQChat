import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyle = makeStyles({
    link:{
        textDecoration: 'none',
    },
    icon:{
        width: '0.5em',
        paddingLeft: 2,
    },
});

const MyUrlField = ({record = {}, source})=>{
    const classes = useStyle();
    return (
        <a href={record[source]} className = {classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon}/>
        </a>
    );
}
    

export default MyUrlField;