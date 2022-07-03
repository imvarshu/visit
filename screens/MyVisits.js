import { useState, useEffect } from 'react';
import { APP_ID } from '../config';
import ProfileList from "../components/ProfileList";

const MyVisits = (props) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(()=> {   // to show the data for the first time
        fetchProfiles();
    },[]);
    

    // using fetch to receive data from API, app is is stored in config, after converting the data to json we are 
    // setting it os setProfiles useState
    const fetchProfiles = () => {
        const url = `https://dummyapi.io/data/v1/user?limit=100`
        fetch(url,
            {
                method: 'GET',
                headers: { "app-id": APP_ID }
            })
            .then(response => response.json())
            .then(res => {
                setProfiles(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        // we are using flatlist in profilelist to show the data on myVisit
       <ProfileList items={profiles} {...props}/>
    )
}

export default MyVisits;