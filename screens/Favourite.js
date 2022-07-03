import { useSelector } from 'react-redux';
import ProfileList from "../components/ProfileList";

// we are just picking the favourite data of user and setting it to favourite screen
// using useSelector we are picking the profile which user set to favouite and shwoing that
// through profilelist (in which we are already using flatlist to render the data

const Favourite = (props) => {
    const { favourite } = useSelector((state) => state.favourite);    
    return(
       <ProfileList items={favourite} {...props}/>
    )
}

export default Favourite;