import {View, Text, StyleSheet} from 'react-native';

// just made this componenet to better structure the profile screen so break the code here and used properties to pass the data

const ProfileDetail = ({label, children}) => {
    return (
        <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
            <Text  style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{children}</Text>
        </View>
    )
}

export default ProfileDetail;


const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight:'600',
        marginRight: 5,
    },
    value: {
        fontSize: 18,
    }
})
