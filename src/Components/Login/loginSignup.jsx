import React from 'react';
import './loginSignup.css';
import googleLogo from '../Assests/google_logo.png';
const LoginSignup = () => {
    return <>
        <div className="loginsignup-container">
            <div className="wrapper">
                <form action="">
                    <h1>Login / Register</h1>
                    <div className="loginsignup-fields">
                        <div className="input-box">
                            <label for="phone" id="rr">Mobile Number</label>
                            <input id="name" name="phone" placeholder="Enter your Number" required />
                        </div>

                        {/* <div className="btn"> */}
                        <button  id="continue" type="submit">Continue</button>
                        {/* </div> */}
                        <div className="line-container">
                        <div className="line"></div>
                        <div className="line-text">Or</div>
                        <div className="line"></div>
                        </div>
                        <button id="google" type="submit"> 
                            <div className="google-logo-container">
                                <img src={googleLogo} alt="Google Logo" className="google-logo" />
                            </div>
                            Login with Google
                        </button>
                        <div className="terms">
                            <label id="text">
                                <input id="ck" type="checkbox" />
                                <span className="custom-checkbox"></span>
                                By Continuing, you agree to D-Fit Nutrition terms of use and privacy policy.
                            </label>
                        </div>  
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