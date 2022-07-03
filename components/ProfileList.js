import { FlatList } from 'react-native';
import ProfileCard from './ProfileCard';
// using flat list to show the data. here we are receiving data in item and rendering the flat list from ProfileCard component
const ProfileList = (props) => {
    const {items} = props;
    return (
         <FlatList
            style={{ backgroundColor:'#DF806C', padding: 5}}
            numColumns={2}
            data={items}
            renderItem={({item}) => <ProfileCard item={item} {...props} />}
            keyExtractor={(item, index) => index}
        />
    )
}
export default ProfileList;