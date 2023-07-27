import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <Phone>
            <p>Hey You are in the wrong page <span>click <Link to="/">here </Link>to go to the home page</span></p>
        </Phone>
     );
}
 
export default NotFound;

const Phone = styled.div`
    padding: 3em 1.7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f0e4;
    p{
        text-align: center;
    }
`;