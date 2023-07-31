import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const CodeConfirm = () => {
    return ( 
        <Phone>
        <Link to='get-username'>
            <img src='./images/arrow.png' alt="" />
        </Link>
        <h1>Enter the code we just texted you</h1>
        <input type="text" />
        <p>Didn't receive it?<span>Tap to resend</span></p>
        <Link to ='/allow_notification' >
        Next<img src="/images/nextArrowIcon.svg" alt="" />
        </Link>
        </Phone>
     );
}
 
export default CodeConfirm;

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
        font-size: 0.775em;
        font-weight:400;
        font-style: normal;
        margin-top:1em;
        width:100%;
        max-width: 270px;
        text-align:center;
        justify-content: space-evenly;
        span{
            font-weight: 500;
        }
    }

    a:last-child{
        display: flex;
        align-items: center;
        background-color: var(--btnBgColor);
        color:#ffff;
        border-radius: 1.5em;
        padding:0.5em 1.5em;
        font-size:1.2em;
        font-weight:500;
        font-style: normal;
        text-align: center;

    }
    
    a:first-child{
        position: absolute;
        top:10px;
        left:10px;
        img{
            width:20px;
        }
    }

    input{
        width: 50%;
        border: none;
        text-align: center;
        outline:none;
    }
   
`;

