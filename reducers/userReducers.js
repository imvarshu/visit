
const initialState = {
    favourite: [],
    user: null,
}
const userReducers = (state = initialState, action) => {


    switch(action.type) {

        case 'login':
            return {
                ...state,
               user: action.user
            }

   
        case 'logout':
       
            return {
                ...state,
                user: null
            }

        default:
            return state
    }
}
export default userReducers;