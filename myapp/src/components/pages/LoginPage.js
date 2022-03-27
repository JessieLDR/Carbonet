import React from "react";
import LoginInput from "./../Login/LoginInput"
import KeepLoginCheckBox from "./../Login/KeepLoginCheckBox";
import Link from "./../general/Link";
import MyButton from "./../general/MyButton";

function LoginPage(props){
    return(
                <div>
                    <div className="title_container">
                        <h1>Welcome back</h1>
                    </div>
                    <LoginInput></LoginInput>        
                    <KeepLoginCheckBox />
                    <Link text="Forgot your password?" link="placeholder"></Link>
                    <MyButton name="Login"></MyButton>
                </div>
    )
}

export default LoginPage;