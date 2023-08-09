import React,{ useState } from 'react'
import styled from "styled-components"
import { FcGlobe } from "react-icons/fc"
import { Button } from 'bootstrap'


export default function StartRoom(props) {
    const [room,setRoom] = useState("open")

  return (
    <Maindiv>
      <Switch></Switch> 
      {/* //switch_line */}
      <Text>
        <button>+ Add a Topic</button>
      </Text>
      <Buttondiv>
        <button className={room == 'open' ? 'styleddiv' : ''}
                onClick={() =>setRoom("open")}>
          <div>
            <FcGlobe /> 
          </div>
          open
        </button>
        <button className={room == 'social' ? 'styleddiv' : ''} 
                onClick={() =>setRoom('social')}>
          <div>
            <FcGlobe /> 
          </div> 
            social
        </button>
        <button className={room == 'closed' ? 'styleddiv' : ''}
                onClick={() => setRoom('closed')}>
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </Buttondiv>
      <p>Start a Room{" "}<span>{room == 'closed' ? 'for people I choose' :
                            room == 'social' ? 'with people I follow' :
                            'open to everyone'}</span>
      </p>
      <Letsgo>
        <button onClick={() =>{ props.setSheetCreateRoom(true);
                                props.setSheetVisible(true);}
                        }>
                            🎉 Let's go
        </button>
      </Letsgo>
    </Maindiv>
  )
}
const Maindiv = styled.div`
  /* position: relative; */
  /* background-color: red; */
  p{
    font-size: 1em;
    color:var(--textColor);
    text-align: center;
    font-weight: 500;
    
  }
`;

const Buttondiv = styled.div`
  border-bottom: 1px solid #cccccc;
  padding:1.5em 0;
  display: flex;
  align-items:center;
  justify-content: space-between;
  button{
    border:none;
    background-color: transparent;
    border-radius: 1em;
    padding:0.5em 1.3em 0.2em 1.3em;
    color:var(--textColor);
    line-height:1.2;
    div{
      background-color: lightseagreen;
      border-radius: 1.5em;
    }
    svg{
      font-size:4em;
    }
  }
  button.styleddiv{
    border:1px solid lightseagreen;
    background-color: lightblue;
  }
`;

const Text = styled.div`
display: flex;
justify-content: flex-end;
button{
  text-align: left;
  background-color: transparent;
  border:none;
  color:#28ae61;  
}
`;

const Letsgo = styled.div`
  text-align:center;
  font-size:1.3em;
  button{
    border:none;
    border-radius:2em ;
    color:#ffffff;
    background-color: #28ae61;
    padding:0.3em 2em;
    text-align:center;
  }
`;

const Switch = styled.div`
  position:absolute;
  top:6px;
  left:50%;
  /* transform:translateX("-50%"); */
  height:4px;
  width:35px;
  background-color: #cccccc;
`;



