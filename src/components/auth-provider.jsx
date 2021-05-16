import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);



function AuthProvider({children}){

    const [email, setEmail]= useState("");
    const [logged, setLogged] = useState(false);


    const login = ({email,password}) => {
        setEmail(email);
        setLogged(true);
    }

    const logout = () => {
        setEmail('');
        setLogged(false);
    }



    return (
        <AuthContext.Provider value={{email, login, logout, logged}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider