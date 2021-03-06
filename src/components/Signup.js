import React , { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Box,Container, MenuItem,Select, Input, InputLabel, TextField, Button, Typography} from '@material-ui/core'
import {useSelector, useDispatch } from 'react-redux';
import { signIn } from '../redux/actions/isLogged'
import { connect, dispatch} from 'react-redux';
import { logIn } from '../redux/reducers/isLogged';
import {register} from '../redux/actions/isLogged'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  width:{
    width:'30%'
  },
  // textfield:{
  //   width:'150%',
  // },
  button:{
    background: '#35578f',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #33435e',
    color: 'white',
    marginTop:10,
    height:'50px',
    textDecoration:'none',
    display:'block',
    textAlign:'center',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      background: '#33435e'
    }
  },
  buttonText:{
    textDecoration:'none'
  },
  textfield:{
    marginTop:20
  },
  header:{
    marginTop:60
  }
})
)
//you have to install redux and install react-redux
//i kind of used this website https://serverless-stack.com/chapters/create-a-login-page.html

function Signup(props) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [collegeError, setCollegeError] = useState('');
  const [errormessage,setErrorMessage] = useState(false);
  const [isLogged,setIsLogged] = useState(false);
  const dispatch = useDispatch();
  function handleClick(e){
    // console.log(props.state.isLoading)
    // console.log(props.state.error)
    if(!validateForm()){
        e.preventDefault();
    }
    else{
        e.preventDefault()
        console.log(props.errorMsg)
        props.register(props.history,fullname,email,username,password,college);//signup
    }
        //send user to mongodb using axios. 
    /*if validatedform is false so its not validated then you prevent the 
    default action from happening which is going to user profile page.*/
  }
  function validateForm(){
    setErrorMessage(true);
      if(fullname.length === 0)
        setFullNameError("fullname is blank");
      else if(email.length === 0){
        setFullNameError("");
        setEmailError("email is empty");
      }
      else if(!validateEmail()){
        setFullNameError("");
        setEmailError("Invalid email format");
      }
      else if(username.length === 0){
        setFullNameError("");
        setEmailError("");
        setUsernameError("Username is empty");
      }
      else if(password.length === 0){
        setFullNameError("");
        setEmailError("");
        setUsernameError("");
        setPasswordError("password is empty");
      }
      else{
        setFullNameError("");
        setEmailError("");
        setUsernameError("");
        setPasswordError("");
        setCollegeError("College must be chosen");
      }
    return (username.length > 0 && fullname.length > 0 
      && email.length > 0 && password.length > 0 && 
      college.length > 0 && validateEmail());
  }
  function updateUsername(event) {
    setUsername(event.target.value);
  }
  function updateFName(event) {
    setFullname(event.target.value);
  }
  function updatePassword(event) {
    setPassword(event.target.value);
  }
  function updateEmail(event) {
    setEmail(event.target.value);
  }
  function updateCollege(event) {
    setCollege(event.target.value);
  }
  function validateEmail(){
    //let email = this.state.email;
    const pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    console.log(pattern.test(email));
    return pattern.test(email);
  }
      return (
        <div className={classes.container}>
          <Typography className={classes.header} variant = "h4">
            Make the most of your Academic life
          </Typography>
          <div className={classes.width}>
            <p>{props.errorMsg}</p>
            <TextField placeholder="full name" name="fullname"
              className={classes.textfield}
              error={fullNameError.length > 0}
              label="Full Name*"
              id="standard-error-helper-text"
              helperText={fullNameError}
              type="text" 
              variant="outlined"
              fullWidth
              onChange={updateFName}/>
            <TextField label="email"
              name="email"
              className={classes.textfield}
              type="email"
              placeholder="E-mail"
              variant="outlined"
              fullWidth
              onChange={updateEmail}/>
              {emailError === 'email is empty' && <div id ="errorlabel">{emailError}</div>}
              {emailError === 'Invalid email format' && <div id ="errorlabel">Invalid Email Format!</div>}
            <TextField
              className={classes.textfield}
              placeholder="Enter Username*"
              name="username"
              type="text"
              variant="outlined"
              fullWidth
              onChange={updateUsername}
            />
            {usernameError.length > 0 && <div id ="errorlabel">{usernameError}</div>}
            <TextField
              className={classes.textfield}
              placeholder="Enter Password*"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={updatePassword}
            />
            {passwordError.length > 0 && <div id ="errorlabel">{passwordError}</div>}
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                name="college"
                onChange={updateCollege}
                fullWidth
                helperText="Please select your College"
            >
              <MenuItem value="Queens College">Queens</MenuItem>
              <MenuItem value="Hunter College">Hunter</MenuItem>
              <MenuItem value="Baruch">Baruch</MenuItem>
            </TextField>
            {collegeError.length > 0 && <div id ="errorlabel">{collegeError}</div>}
            <NavLink to={{
                pathname: '/',
              }} style={{textDecoration:'none'}} onClick={handleClick}>
              <Button fullWidth className={classes.button}>
                Signup
              </Button>
            </NavLink>

          </div>
            
        </div>
      );
    }
const mapStateToProps = (state) => {
  console.log(state)
      return {
        isLogged:state.logged.loggedIn,
        errorMsg:state.error.msg.msg,
        isLoading:state.logged.isLoading
      };
}

function mapDispatchToProps(dispatch){
  return {
    register:(history,fullName,email,username,password,college)=>{
        register(dispatch,history,fullName,email,username,password,college)
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup)

// export default connect(mapStateToProps, {signIn})(Signup);
