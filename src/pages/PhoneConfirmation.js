import React,{useState} from "react";
import { styled } from "styled-components"
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

const PhoneConfirmation = () => {
    const[value,setvalue] = useState();
    return ( 
        <Phone>
            <Link to="/">
                <img src="/images/arrow.png"></img>
            </Link>
            <h1>Enter your Phone</h1>
            <PhoneInput 
                international defaultCountry="US" 
                value ={value} 
                onChange={setvalue}
            />

            <p>By entering your number, you're aggreing to our {' '}
            <span>
                Terms of Service and Privacy Policy.
            </span>
            Thanks!
            </p>
            <Link to='/code_confirm'>
                Next
                <img src="/images/nextArrowIcon.svg" alt=" " /> 
            </Link>
        </Phone>
     );
}
 
export default PhoneConfirmation;

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
        font-size: 1.em;
        font-weight: 500;
        font-style: normal;
        margin-bottom: 0;
        color: var(--textColor);
    }
    p{
        font-size: 0.775em;
        font-weight:400;
        font-style: normal;
        margin:0;
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
        border-radius: 0.5em;
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
   
`;

