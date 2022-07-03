import {View,Text,StyleSheet,Image, Dimensions, TouchableOpacity} from 'react-native';

 // getting image size from window width to make a standard size of the card. 
// making it half of the window width and reducing 60 pixes for padding
const imageSize =  (Dimensions.get('window').width / 2) - 60;

const ProfileCard = ({item,navigation}) => {
    // making function for onpress (TouchableOpacity) to redirect to user to profile page
    const openProfile = () => {
        navigation.navigate('Profile', { id: item.id })
    }
    // destructuring the data which we are receiving from API in data and then in item object
    const{firstName, id, lastName, picture,title} = item
    return (
        <TouchableOpacity style={styles.card}
        onPress={openProfile}
        >
            <Image
                style={styles.image}
                source={{
                uri: picture,
                }}/>
            <Text style={styles.title}>{title} {firstName} {lastName}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
      flex: 0.5,
      backgroundColor: '#FFE8AF',
      padding: 10,
      width: '100%',
      margin: 5,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    image:{
        width: imageSize,
        height: imageSize,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        textAlign: 'center'
    }
})
export default ProfileCard;