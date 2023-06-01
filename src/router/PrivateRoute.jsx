import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to='/login'/>
};

export default PrivateRoute;