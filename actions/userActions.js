const loginUser = (user) => {
    return {
        type: 'login',
        user: user,
    }
} 
const logoutUser = () => {
    return {
        type: 'logout',
        user: null,
    }
}

export {
loginUser,
logoutUser,
}