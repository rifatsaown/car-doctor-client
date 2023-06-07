import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateLogin = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user?.email){
        return children;
    }
    return <Navigate to='/'/>;
};

export default PrivateLogin;