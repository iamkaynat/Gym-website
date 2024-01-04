import React from 'react';
import './loginSignup.css';
const LoginSignup = () => {
    return <>
        <div className="loginsignup-container">
            <div className="wrapper">
                <form action="">
                    <h1>Log in</h1>
                    <div className="loginsignup-fields">
                        <div className="input-box">
                            <input id="name" type="text" placeholder="Enter your name" name="name" required />
                        </div>
                        <div className="input-box">
                            <input id="email" type="email" placeholder="Enter your password" name="email" required />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" name="remember" />Remember Me</label>
                            <a href=" " >Forgot Password?</a>
                        </div>
                        <button type="submit">Log in</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href=" ">Register</a></p>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    </>
}
export default LoginSignup;