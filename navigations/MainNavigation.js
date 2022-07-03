import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import BottomTab from '../navigations/BottomTab';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    // we are taking the state of the user which we use to redirect user to correct screen
    const {user} = useSelector(state =>state.user);
    return (
        <NavigationContainer>

            {/* if user exist then user and user token will be true then user will directly go to BottomTab(MyVisit) or login screen */}

            <Stack.Navigator initialRouteName={ (user && user.token) ? 'BottomTab' : 'LoginScreen' }>
                <Stack.Screen name="BottomTab" component={BottomTab}  options={{headerShown: false}} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;