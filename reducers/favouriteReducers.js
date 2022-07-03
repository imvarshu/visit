const initialState = {
    favourite: [],
    user: null,
}
const favouriteReducers = (state = initialState, action) => {
    const favourite =  [...state.favourite]

    switch(action.type) {

        // add data to favourite
        case 'add':
            return {
                ...state,
                favourite: [...favourite, action.favourite]
            }

        // delete item from favourite
        case 'delete':
            const index = favourite.findIndex(item => item.id === action.favourite.id); //finding index of item 
            if(index >= 0) favourite.splice(index, 1) // if item exists delete it using splice
            return {
                ...state,
                favourite
            }

        default:
            return state
    }
}
export default favouriteReducers;