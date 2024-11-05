import "./Login.css";
import MyNavbar from "../../components/navbar/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = ()=>{
        if(username == 'admin' && password == '12345'){
            document.cookie = "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
            navigate('/panel')
        }else{
            Swal.fire({
                title: "خطا!",
                text: "نام کاربری یا رمز عبور اشتباه است",
                icon: "error",
                confirmButtonText: "بستن",
              });
        }
    }


  return (
    <div>
      <MyNavbar />
      <div className="login-page">
        <div className="form"> 
          <form className="login-form">
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitHandler} type="button">login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
