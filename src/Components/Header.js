import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

export default function Header() {
  return (
    <Head>
      <Link to = "/explore" >
        <img src="/images/search.png"  />
      </Link>
      <Nav>
        <Link to ="/friends_invite" >
            <img src ="/images/invite.png" />
        </Link>

        <Link to ="/upcoming" >
            <img src ="/images/calendar.png" />
        </Link>

        <Link to ="/activity" >
            <img src ="/images/noti.png" />
        </Link>

        <Link to ="/profile" >
            <img src ="/images/b1.png" />
        </Link>

      </Nav>
    </Head>
  )
}

const Head= styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 1em;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    background-color: #f2f0e4;

    img{
        width:25px;
    }
`;

const Nav = styled.div`
    img{
        margin:0 0.8em;
    }

`