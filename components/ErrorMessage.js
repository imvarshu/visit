// making a separate component for error message to make to code clean 

import { Text, View} from'react-native'

const ErrorMessage = ({message}) => {
    return(
        <View style={{ padding: 10, backgroundColor: '#F0D6D8', width: '100%', marginBottom: 10,}}>
            <Text style={{ color: 'red', fontWeight: '500'}}>{message}</Text>
        </View>
    )
}
export default ErrorMessage;