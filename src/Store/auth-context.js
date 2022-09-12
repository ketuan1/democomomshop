import React from 'react';

//save status login

const AuthContext = React.createContext({
    storeIsLoggedIn: false,
    onLogout: () => {}
})

export default AuthContext;