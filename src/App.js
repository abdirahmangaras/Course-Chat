import React , {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed/Feed';
import Signup from './components/Signup';
import Login from './components/login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import UserProfile from './components/UserProfile/UserProfile';
import ClassComponent from './components/ClassComponent/ClassComponent'
import Chat from './components/Chat/Chat'
import {loadUser} from './redux/actions/isLogged'
import getMessagesAndChatters from './redux/actions/messageActions'
import {connect} from 'react-redux'
import FootBar from './components/Footer/Footer'
import socket from './socket'
class App extends React.Component {
  componentDidUpdate(){
    if(this.props.user){
      if(this.props.currentComponent == 'chat') {
        socket.initializeSocket(this.props, 'chat')
      }
      else {
        socket.initializeSocket(this.props, 'everywhere else')
      }
    }
  }
  render(){
    return ( 
      <Router>
        <div className="App">
          <Nav/>
          <Route path="/" exact component={Feed}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/class" component={ClassComponent}/>
          <Route path="/chat" component={Chat}/>
          <FootBar/>
        </div>
      </Router>
    );//use exact /signup doesnt bring along feed component
  }
}
const mapStateToProps = (state) =>(
  {
    user:state.logged.user,
    allMessages:state.chatters.messages,
    allChatters:state.chatters.chatters,
    currentComponent:state.footer.currentComponent,
  }
)


function mapDispatchToProps(dispatch){
  return {
    loadUser:()=>{
      loadUser(dispatch)
    },
    addMessage:(message)=>{
      dispatch({
        type:'ADD_MESSAGE',
        payload:message
      })
    },
    addNotification:(user)=>{
      dispatch({
        type:"ADD_NOTIFICATION",
        payload:user
      })
    },
    addChatter:(chatter)=>{
      dispatch({
        type:"ADD_CHATTER",
        payload:chatter
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
//https://dev.to/rubiin/ubuntu-increase-inotify-watcher-file-watch-limit-kf4