import React from 'react';
import 'typeface-roboto';
import { Card, CardContent, CardMedia, Typography  } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const userStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: '50px',
    background: '#EDF4FA',
    boxShadow:  ['20px 20px 40px #dfe5eb', '-20px -20px 40px #fbffff'],
    width: 300,
    height: 300,
  },
  topicName: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%'
  },
  topQuestionContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  topQuestion: {
    
  }
}));

export default function TopicCard(props) {
  const {topic, questions, style, topNumber=3 } = props;
  const classes = userStyle();
  const theme = useTheme();
  const questionList = questions.slice(0, topNumber).map((q, idx) => (
    <li className={classes.topQuestion} key={idx.toString()}>
      <Typography variant="h5">
        {q.description}
      </Typography>
    </li>
  ));
  return (
    <div className={classes.root} style={style}>
      <Typography variant="h3" component="h2" className={classes.topicName}>{topic.name}</Typography>
      <ul className={classes.topQuestionContainer}>
        {questionList}
      </ul>
    </div>
  )
}

