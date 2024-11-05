import { Navigate } from "react-router-dom"
import { isLogin } from "../utils"

function PrivateRoute({children}){
    // const isLogin = (username) =>{
    //     if(username == 'admin')
    //         return true
    //     return false
    // }
    return(
    // <>
    //     {isLogin("admin") ? children : <Navigate to="/" />}
    // </>
        <>
            {isLogin() ? children : <Navigate to='/login' />}
        </>

    )
}

export default PrivateRoute