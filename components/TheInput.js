// A simple textinput componenet we will use in login screen and pass data through properties.
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'

const TheInput = ({placeholder,value,onChangeText}) => {
    return(
            <TextInput 
            style={styles.inputfield}
            placeholder = {placeholder}
            value = {value}
            onChangeText= {onChangeText}
            />
    )
}

const styles = StyleSheet.create({

   inputfield:{
   fontSize:16,
    width:'100%',
    height:50,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom: 20,
   }
  });

export default TheInput;