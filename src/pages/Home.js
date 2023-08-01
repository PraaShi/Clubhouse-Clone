import React from 'react'
import styled from "styled-components"
import Header from '../Components/Header';
import DailyInfoCard from '../Components/DailyInfoCard';
import RoomInfoCard from '../Components/RoomInfoCard';
import {AiOutlinePlus} from "react-icons/ai"
import { BsGrid3X3Gap } from 'react-icons/bs';

export default function Home() {
  return (
    <Hom>
      <Header />
      <Footer>
        <DailyInfoCard />
        <RoomInfoCard />
      </Footer>
      <Btn>
        <button>
          <AiOutlinePlus />
          Start the Room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </Btn>
    </Hom>
  )
}

const Hom = styled.div`
  background-color: #f2f0e4;
  height:100vh;
  position: relative;
  width: 100vw;
  max-width: 500px;
  margin:auto;
  /* overflow-y: hidden; */
`;

const Footer =styled.div`
  padding-top: 3.5em;
  overflow:auto;
  padding-left: 1em;
  padding-right:1em;
  padding-bottom:3.5em;
  height:100%;
  /* margin-bottom: auto; */
`;

const Btn = styled.div`
  display:flex;
  font-size: 1.3em;
  button{
    border:none;
    background-color: transparent;
    margin-left: auto;
  }
`;