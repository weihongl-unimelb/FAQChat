import React from 'react';
import { Card, CardContent, CardMedia, Typography  } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const userStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  topQuestionsContainer: {

  }
}));

export default function TopicCard({topic, questions}) {
  const classes = userStyle();
  const theme = useTheme();
  const questionDescriptionList = questions.map( q => (
    <Typography variant="subtitle1" color="textSecondary">
          {q.description}
    </Typography>
  ));
  return (
    <Card className={classes.root}>
      <CardMedia image={topic.icon.url}/>
      <CardContent className={classes.topQuestionsContainer}>
        <Typography component="h5" variant="h5">
          {topic.name}
        </Typography>
        {questionDescriptionList}
      </CardContent>
    </Card>
  );
}

