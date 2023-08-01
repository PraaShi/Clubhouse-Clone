import React from 'react'
import styled from "styled-components"
import data from "../Data/dailyCard.json"

export default function DailyInfoCard() {
    // console.log(data)
  return (
    <Daily>
      {/* <h2>{data[2].title}</h2> */}
      {data.map((items) => (
        // return(
        <div>
            <span>
                {items.time}
            </span>
            <div>
                <span>{items.title}</span>
                <p>{items.description}</p>
            </div>
            
        </div>
        // );
      ))}
    </Daily>
  )
}

const Daily= styled.div`
    background-color:#e7e4d5;
    padding:0.5em 1em;
    border-radius:1em;
    & > div{
        display:flex;
        gap: 1em;
        /* align-items: flex-start; */
        margin-bottom:0.5em;
        /* justify-content: space-between; */
    }
    &>div>span{
        width:20%;
        text-align: end;
    }
    
    &>div>div{
        margin-left:0.5em;
        display: flex;
        flex-direction: column;
        width:80%;
    }
    &>span{
        font-size:0.675em;
        color:var(--textColor);
        font-weight:500;
    }
    p{
        font-size: 0.875em;
        font-weight: 500;
        line-height:1;
        margin:0;
        display:inline-block;
        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        width:195px;
    }
`;