import { useState } from 'react';
import { View } from 'react-native'
import TheInput from '../components/TheInput';
import TheButton from '../components/TheButton';
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/userActions';
import ErrorMessage from '../components/ErrorMessage';
import { LOGIN_URL } from '../config';

const LoginScreen = (props) => {
    const dispatch =  useDispatch();
    const [email,setEmail] = useState('eve.holt@reqres.in'); // setting intial state for email using useState for testing keeping it prefilled
    const [password,setPassword] = useState('cityslicka'); // setting intial state for password using useState for testing keeping it prefilled
    const [error, setError] = useState(''); // setting initial state of error message as empty

  const login = () => {
    setError('') // setting error to empty so the user does not see old error message every time he logs in

    //  Login url is taking from config, receiving data from POST and then at final stage,
    //  if receing error then setting it using useState or if receing token then creating a new object to store user's data
    fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(res => {
      if(res.error){
        setError(res.error)
      }
      if(res.token) {
        const user = {
          email: email,
          token: res.token,
        }
        dispatch(loginUser(user))  // loginUser is defined is userActions and userReducers
        props.navigation.reset({ // to prevent user from going back, from back button or swipe
            index: 0,
            routes: [{name: 'BottomTab'}],
          });
      }
    }).catch(error => {
      console.log(error)
    })
  }
  return(
    <View style={{flex: 1, justifyContent:'center',  alignItems:'center', padding:20, backgroundColor: '#FFF', }}>
        {!!error && <ErrorMessage message={error} />}
        
        <TheInput
            value = {email}
            onChangeText={setEmail}
            placeholder='Email'
        />
        
        <TheInput   
            value = {password}
            onChangeText={setPassword}
            placeholder='Password'/>
        
        <TheButton onPress = {login}/>
   </View>
  )
}

export default LoginScreen;