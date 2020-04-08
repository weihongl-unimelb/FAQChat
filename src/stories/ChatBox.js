import React, { useState } from 'react';
import { Card, CardContent, Paper, Typography} from '@material-ui/core';
import { Button, IconButton, Icon, Avatar, ButtonGroup } from '@material-ui/core';
import { Divider, SvgIcon } from '@material-ui/core';
import { Fab, Badge } from '@material-ui/core';
import InputBase from "@material-ui/core/InputBase";
import SendIcon from '@material-ui/icons/Send';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import StopIcon from '@material-ui/icons/Stop';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import '../font.scss';

const colorScheme = {
  '50': '#eceff1',
  '100': '#cfd8dc',
  '200': '#b0bec5',
  '300': '#90a4ae',
  '400': '#78909c',
  '500': '#607d8b',
  '600': '#546e7a',
  '700': '#455a64',
  '800': '#37474f',
  '900': '#263238',
}

const userStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 600,
    width: 350,
    borderRadius: '25px, 25px, 0px, 0px',
    backgroundColor: colorScheme['50'],
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colorScheme['500'],
    height: 55,
    paddingLeft: 3,
    paddingRight: 3,
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colorScheme['50'],
    flexGrow: 1,
    overflowY: 'scroll',
    overflowX: 'initial',
    marginLeft: 6,
    marginTop: 4,
    flexGrow: 20,
  },
  headerButton: {
    alignSelf: 'center',
    color: colorScheme['100'],
  },
  menuDrawer: {
    backgroundColor: colorScheme['500'],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 200,
    paddingTop: 20
  },
  drawerItem: {
    color: colorScheme['100'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: colorScheme['500'],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'white', 
    flex: 1, 
    marginLeft: '10px',
    marginTop: '8px', 
    marginBottom: '8px',
  }
}));


export const ChatBox = props => {
  const {
    title,
    initMessages=[],
    initOptions=[],
    api,
    ...rest
  } = props;
  const theme = useTheme();
  const classes = userStyle(theme);
  
  const [showDrawer, setShowDrawer] = useState(false);
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  const [unreadMessageNum, setUnreadMessageNum] = useState(2);
  const [messages, setMessages] = useState([{msg: initMessages, fromUser: false, options: initOptions}]);
  const [inputMessage, setInputMessage] = useState("");
  const sendMessage = () => {
    if (!inputMessage) return;
    setMessages([...messages, {msg: [inputMessage], fromUser: true}])
    setInputMessage('');
  };

  return (
    <div>
      <Card className={classes.root} style={{display: chatBoxOpen? 'flex': 'none'}}>
        <div className={classes.headerContainer}>
          <IconButton aria-label="minimize" size="small" onClick={()=>{setChatBoxOpen(false)}}>
            <Icon style={{ transform: 'rotate(45deg)' }}>unfold_less</Icon>
          </IconButton>
          <Button className={classes.headerButton} onClick={() => {setShowDrawer(!showDrawer)}}>
            <Typography variant="h5"> { title } </Typography>
          </Button>
          <IconButton aria-label="close" size="small">
            <Icon>close</Icon>
          </IconButton>
        </div>
        <div className={classes.menuDrawer} style={{display: showDrawer ? 'flex': 'none'}}>
          <div className={classes.drawerItem}>
            <IconButton style={{width: 120, height: 120}}>
              <SvgIcon style={{width: 100, height: 100}}>
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
              </SvgIcon>
            </IconButton>
            <p>Save Transcript</p>
          </div>
          <div className={classes.drawerItem}>
            <IconButton style={{width: 120, height: 120}}>
              <StopIcon style={{width: 100, height: 100}}/>
            </IconButton>
              <p>End Chat</p>
            </div>
        </div>
        <div className={classes.messageContainer}>
          {messages.map(m => <Message messages={m.msg} options={m.options} fromUser={m.fromUser}/>)}
        </div>
        <div className={classes.inputContainer} Component="form">
          <InputBase fullWidth multiline
             className={classes.input} 
             value={inputMessage}
             onChange={event => {setInputMessage(event.target.value)}} />
          <IconButton onClick={sendMessage} onKeyPress={e => {if(e.key === 'Enter' && e.shiftKey){sendMessage()}}}><SendIcon/></IconButton>
        </div>
      </Card>
      <ChatBoxSwitch onClick={() => {setChatBoxOpen(true); setUnreadMessageNum(0)}}
                     unreadMessageNum={unreadMessageNum} 
                     hidden={chatBoxOpen}/>
    </div>
  );
}


const useMessageStyle = makeStyles( theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  iconBox: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  messageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 10,
    paddingTop: 7,
  },
  message: {
    borderRadius: '6px',
    padding: '8px',
    marginBottom: '5px'
  },
  endPlaceholder :{
    width: 20
  },
  userMessageColor: {
    backgroundColor: '#B2FF59',
    color: 'black',
  },
  agentMessageColor: {
    color: colorScheme['100'], 
    backgroundColor: colorScheme['600'], 
  },
  
}));


export function Message (props) {
  const {avatar, messages, fromUser, options=[], optionHandler,...rest} = props;
  const classes = useMessageStyle();
  let messageList;
  if (!Array.isArray(messages)) {
    messageList = messages ? [messages]: [];
  } else {
    messageList = messages;
  }
  const messageClass = `${classes.message} ${fromUser? classes.userMessageColor: classes.agentMessageColor}`
  let messageItems = messageList.map((msg, idx) =>(
    <div key={idx.toString()} className={messageClass}>
      {msg}
    </div>
  ));
  return (
    <div className={classes.root} style={{flexDirection: fromUser? "row-reverse": "row"}}>
      <Avatar src={avatar} className={classes.iconBox}/>
      <div className={classes.messageBox}>
        {messageItems}
        <MessageOption options={options} onClick={optionHandler}/>
      </div>
      <div className={classes.endPlaceholder}></div>
    </div>
  );
}

const useChatBoxSwitchStyles = makeStyles((theme) => ({
  root: {
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export function ChatBoxSwitch({unreadMessageNum, onClick, hidden}) {
  const theme = useTheme();
  const classes = useChatBoxSwitchStyles(theme);
  return (
    <Fab variant='extended' className={classes.root} onClick={onClick} style={{display: hidden? 'none':''}}>
      <Badge badgeContent={unreadMessageNum} color="primary">
        <Avatar className={classes.extendedIcon}/>
      </Badge>
      Open Chat Box
    </Fab>
  );
}


export function MessageOption(props) {
  const {options, onClick, ...rest} = props;
  const optionList = options.map(opt => {
    const {id, hint} = opt;
    return (
      <Button onClick={() => onClick(id)} key={id.toString()}>
        {hint}
      </Button>
  )});
  return (
    <ButtonGroup orientation="vertical" color="inherit" aria-label="message option group">
      {optionList}
    </ButtonGroup>
  );
}