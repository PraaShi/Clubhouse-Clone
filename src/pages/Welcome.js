import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';


export default function Welcome() {
  return (
    <Wel>
        <h1>Welcome!</h1>
        <Welc>
            <p>We're really working hard to build the clubhouse ready for everyone while we wrap up the finishing touches,we are adding people gradually to make sure nothing breaks</p>
            <p>Anyone can join with an invite from qn existing user-or reserve your useername and we'll text you if you have a friend on the app who can let you in .We are so grateful you're here and can't wait to have you join!</p>
            <p>Paul,Rohan & the Clubhouse team</p>
        </Welc>
        <Btnuser>
          <Link to = '/invite'>Get Your username </Link>
          <Link>Have a invite text? Sign in</Link>
        </Btnuser>
    </Wel>
  )
}

const Wel = styled.div`
    width: 100vw;
    padding: 3em 1.5em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    height:100vh;
    background-color: #f2f0e4;
    max-width: 500px;
    h1{
      font-size:1.7em;
      font-weight:500;
      font-style:normal;
      margin-bottom:0;
      color:var(--textColor)
    }
`

const Welc = styled.div`
    height:253px;
    overflow:auto;
    p{
      margin-bottom:2em;
      color:var(--textColor);
      font-size:1em;
      font-style:normal;
      font-weight:400;
    } 
`;

const Btnuser = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    align-self: center;
    justify-content: center;
    a:last-child{
      color: var(--btnBgColor);
      font-size:0.87em;
      font-weight: 400;
      font-style: normal;
    }
    a:first-child{
      border-radius: 1.5em;
      padding:0.5em 1.5em;
      color: #ffff;
      font-style: normal;
      border: 20px;
      background-color: var(--btnBgColor);
      
    }
`;

