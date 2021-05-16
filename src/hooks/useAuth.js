import {AuthContext} from "../components/auth-provider";
import {useContext} from 'react';

function useAuth(){

    const context = useContext(AuthContext);

    return context;
    
}

export default useAuth