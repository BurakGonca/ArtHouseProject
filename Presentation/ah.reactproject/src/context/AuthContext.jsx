import { createContext, useState } from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuthenticated,setAuthenticated] = useState(false);

    const login = async(email,password) =>{
        try {
            const user = await AuthService.login(email, password);
            if (user) {
                setAuthenticated(true); 
            }
         } catch (error) {
             setAuthenticated(false); 
             
         }
    }

    const logout = () =>{
        AuthService.logout();
        setAuthenticated(false);
    }


    return <AuthContext.Provider value={{login,logout,isAuthenticated}}>
        {children}
    </AuthContext.Provider>

}

export default AuthContext;