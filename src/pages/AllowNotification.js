import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AllowNotification = () => {
    return ( 
        <Phone>
            <h1>Last important step!</h1>
            <h1>Enable notification to know when people are talking</h1>
            <Notification>
                <h3>"Clubhouse" Would Like To Send You Notification</h3>
                <p>Notifications may include alerts,sounds,and icon badges</p>
            <Lin>
            <Link to="/">Don't Allow</Link>
            <Link to="/">Allow</Link>
            </Lin>
            <img src='/images/handIcon.svg' alt="hh" />
            </Notification>
        </Phone>
     );
}
 
export default AllowNotification;

const Phone = styled.div`
    padding: 3em 1.7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f0e4;
    position: relative;
    h1{
        font-size: 1.3em;
        font-weight: 500;
        font-style: normal;
        margin-bottom: 0;
        color: var(--textColor);
       
        width:100%;
        /* max-width:200px; */
        margin-bottom: 1em;
        text-align: center;
    }
    p{
        font-size: 0.825em;
        font-weight:500;
        font-style: normal;
        line-height: 1.3;
        width:100%;
        max-width: 270px;
        text-align:center;
        justify-content: space-evenly;
    }
`;

const Notification = styled.div`
    border-radius: 1em;
    background-color:#ffffff;
    box-shadow: 0px 0px 5px #cccccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    h3{
        font-size:1em;
        text-align: center;
        font-weight:600;
        color: #000000;
        width:80%;
        /* margin-top:1em; */
        padding: 0.5em;
    }
    img{
        width:80px;
        position: absolute;
        /* bottom:12vh; */
        bottom:-80px;
        right:50px;
    }  
`;

const Lin =styled.div`
    width:100%;
    position: relative;
    a{
        display: inline-block;
        text-align: center;
        width:50%;
        padding: 0.5em;
        border-top: 1px solid #cccccc;
        color:var(--btnBgColor);

        &:first-child{
            border-right:1px solid #cccccc;
        }
    } 

    
`;
