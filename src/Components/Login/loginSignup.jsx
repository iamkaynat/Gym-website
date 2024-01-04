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
                            <label for="phone" id="rr">Enter your mobile number</label>
                            <input id="name" name="phone" placeholder="Enter your Number" required />
                        </div>


                        <button id="continue" type="submit">Continue</button>

                        <div className="line"></div>
                        <button id="google" type="submit"> Login with Google</button>
                        <div className="terms">
                            <label id="text"><input type="checkbox" />By Continuing, you agree to D-Fit Nutrition terms of use and privacy policy. </label>
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