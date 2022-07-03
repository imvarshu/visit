import { useState, useEffect } from 'react';
import {View, Text,Image,Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; 
import { APP_ID } from '../config'; // receiving app id from config
import ProfileDetail from '../components/ProfileDetail';
import { addFavourite, deleteFavourite } from '../actions/favouriteActions';

const Profile = ({route}) => {
    const { favourite } = useSelector((state) => state.favourite);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(null);

    // to load the data for the first time using useEffect
    useEffect(()=> {
        fetchProfile();
    },[]);
    
    // using fetch to get the data from API using method GET cobverting it to json and then setting it to setProfile(useState)
    const fetchProfile = () => {
        const url = `https://dummyapi.io/data/v1/user/${route.params.id}`
        fetch(url,
            {
                method: 'GET',
                headers: { "app-id": APP_ID }
            })
            .then(response => response.json())
            .then(res => {
                setProfile(res)
            })
            .catch(error => {
                console.log(error);
            })
    }

    // this function will activate if user press the favourite button
    const toggleFavourite = () => {

        // finding the index of the item to check if the profile already exists in favourite or not
        const index = favourite.findIndex(item => item.id === profile.id);

        // if index is -1, profile does not exist in favourite then dispatch addFavourite
        if(index == -1){
            dispatch(addFavourite(profile)) // addFavourite is defined in favouiteactions and favouritereducers
        }
        // if index exists then delete profile from favourite list on pressing of favourite button
        else {
            dispatch(deleteFavourite(profile)) //// deleteFavourite is defined in favouiteactions and favouritereducers
        }
    }
    return (
        <View style={{flex:1}}>
            {profile &&
                <View style={styles.container}>
                    <View style ={styles.imagecontainer}>
                        <View></View>
                        <Image
                            style={styles.image}
                            source={{
                                uri: profile.picture,
                            }}/>
                        <TouchableOpacity style={styles.favourite} onPress={toggleFavourite}>
                            <Ionicons name="heart" size={48} color={ favourite.findIndex(item => item.id === profile.id) >= 0 ? 'red' : 'black'} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{profile.id}</Text>
                        <Text style={styles.name}>{profile.title} {profile.firstName} {profile.lastName}</Text>
                    </View>

                    <View style={{marginTop:10}}>
                        <ProfileDetail label='Gender'>
                            {profile.gender}
                        </ProfileDetail>
                        <ProfileDetail label='Date of Birth'>
                            {profile.dateOfBirth}
                        </ProfileDetail>
                        <ProfileDetail label='Registration Date'>
                            {profile.registerDate}
                        </ProfileDetail>
                    </View>

                    <View style={{marginTop: 10}}>
                        <ProfileDetail label='Email'>
                            {profile.email}
                        </ProfileDetail>
                        <ProfileDetail label='Phone'>
                            {profile.phone}
                        </ProfileDetail>
                    </View>
                    <View style={{marginTop: 10}}>
                        <ProfileDetail label='Address'>
                            {profile.location.country}, 
                            {profile.location.state}, 
                            {profile.location.city}, 
                            {profile.location.street}
                        </ProfileDetail>
                    </View>
                </View> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
    },
    imagecontainer: {
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    image:{
    
        width: (Dimensions.get('window').width /2.5),
        height:150,
    },
    name: {
        fontSize:20,
        fontWeight:'600',
      
    }
})

export default Profile;
