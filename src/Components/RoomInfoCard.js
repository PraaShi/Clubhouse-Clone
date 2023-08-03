import { useState , useEffect } from "react";
import styled from "styled-components";
import data from "../Data/roomCard.json";
import React from 'react'
import {BsChatDots, BsChatDotsFill ,BsFillPersonFill} from "react-icons/bs";

export default function RoomInfoCard() {
  return (
    <Room>
      {data.map((items) => (
        // JSON.stringify(items)
        <div>
            <div>
                <div>
                    <h6>{items.title}</h6>
                    <h2>{items.sub_title}</h2>
                    <Mem>
                        <div>
                            <img src="/images/user-img.jpg" />
                            <img src="/images/user-img2.jpg" />
                        </div>
                        <div>
                            {items.members.map((items) => (
                                <p>
                                    {items.first_name}{items.last_name}<BsChatDots />
                                </p>
                            ))}
                            <P>
                                <span>1.8</span> <BsFillPersonFill />
                                <span>   </span>
                                <span>
                                    5
                                </span> <BsChatDotsFill />
                            </P>
                        </div>
                    </Mem>
                </div>
            </div>
        </div>
      ))}
    </Room>
  )
}

const Room = styled.div`
    /* display:none; */
    /* position: relative; */
    /* z-index: 0; */
    & > div{
    background-color: #ffffff;
    padding:1em 1em;
    border-radius:1em;
    border:none;
    margin-top:0.5em;
    
    }
    h6{
        font-size: 0.675em;
        color:var(--textColor);
        font-weight: 500;
    }
    h2{
        font-size: 0.875em;
        font-weight:500;
        line-height:1;
        color:#000000;
    }    
`;

const Mem = styled.div`
    position: relative;
    display:flex;
    align-items: flex-start;
    img{
        width:35px;
        height:35px;
        border-radius: 0.6em;
    }
    &  > div:nth-child(2){
        margin-left:2em;
    }
    img:nth-child(2){
        position:absolute;
        left:1em;
        top:1em;
    }
`;

const P = styled.div`
    /* display:flex;
    align-items:center; */
    font-size: 0.975em;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0.5em;
    color:var(--textColor);
`;