import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

// A simple button componenet which we will use in login form

const TheButton = ({onPress}) => {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.title}>Go</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
     
      backgroundColor: '#FF4B00',
      marginTop:30,
      width: '100%',
      padding:20,
      alignItems:'center',
      
    },
    title: {
        fontSize: 16,
        fontWeight:'600',
        color:'#fff',
        textAlign:'center'
       
      },
})
export default TheButton;