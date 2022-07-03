const addFavourite = (favourite) => {
    return {
        type: 'add',
        favourite: favourite,
    }
} 
const deleteFavourite = (favourite) => {
    return {
        type: 'delete',
        favourite: favourite,
    }
} 

export {
    addFavourite,
    deleteFavourite,
}