import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; 
import { logoutUser } from '../actions/userActions';

const Settings = (props) => {
    const dispatch = useDispatch();

    const logout = () => {
        // logoutUer is defined in actions/userActions and userReducers
        dispatch(logoutUser())
        
        // to prevent user from going back
        props.navigation.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.row} onPress={logout}>
                <Text>Logout</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.row}>
                <Text>Version 1.0</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      width: '100%',
    },
    row:{
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,

    },
   text : {
    fontSize:20,
    fontWeight:'600'
   }
})

export default Settings;