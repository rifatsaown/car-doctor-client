import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    }
    if(user?.email){
        return children;
    }

    return <Navigate state={{from:location}} to='/login'/>
};

export default PrivateRoute;