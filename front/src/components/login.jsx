import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function Login(){

    const navigate = useNavigate();

    const[user, setuser] = useState('');
    const[pass, setpass] = useState('');

    const handleuser = (e) => {
        setuser(e.target.value)
    }

    const handlepass = (e) => {
        setpass(e.target.value)
    }

    const submitdata = () => {
        const logindetail = axios.post(`https://react-login-backend.vercel.app/login`, {"username":user, "password":pass});

        logindetail.then((data) => {
            console.log(data.data)
            if(data.data == true){
                navigate("/success")
            }
            else{
                navigate("/fail")
            }
        })
    }

    return(
        <div className="login-container">

                <div>

                    <input onChange={handleuser} name="username" type="text" placeholder="Username" required />
                    <input onChange={handlepass} name="password" type="password" placeholder="Password" required />
                    <p className="forgot-link"><a href="#">forgot password?</a></p>

                    <button onClick={submitdata} type="submit">Login</button>

                    <p className="signup-link">
                    Need an account? <a href="#">Sign up</a>
                    </p>
                </div>

                <div class="hr-line mt-6">
                    <span className="text-white">OR</span>
                </div>

                <div className="mt-6">
                    <button className="oauth-btn google">Login with Google</button>
                    <button className="oauth-btn github">Login with GitHub</button>
                </div>    
            
        </div>
    )
}

export default Login;