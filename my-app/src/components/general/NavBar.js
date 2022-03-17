import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
    let navigate = useNavigate()
    const navLogin = () => {
        let path = `login`
        navigate(path)
    }
    const navBack = () => {
        let path = `/`
        navigate(path)
    }
    return(
        <nav>
            <h3>Logo</h3>
            <ul>
                <li>How it works</li>
                <li onClick={navLogin}>Switch to Login</li>
                <li onClick={navBack}>Home</li>
            </ul>
        </nav>
    )
}

export default NavBar;