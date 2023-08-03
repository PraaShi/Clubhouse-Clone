import React, {useState} from 'react'
import styled from "styled-components"
import Header from '../Components/Header';
import DailyInfoCard from '../Components/DailyInfoCard';
import RoomInfoCard from '../Components/RoomInfoCard';
import {AiOutlinePlus} from "react-icons/ai"
import { BsGrid3X3Gap } from 'react-icons/bs';
import data from '../Data/roomCard.json'
import BottomSheet from '../Components/BottomSheet';

export default function Home() {
  const [itemsVisible,setItemsVisible] = useState(true);
  const[sheetVisible,setSheetVisible] = useState(false);
  const[sheetCreateRoom,setSheetCreateRoom] = useState(false);
  const[loaderVisibility,setLoaderVisibility] = useState(false);
  const[cardId,setCardId] = useState(1);
  return (
    <Hom>
      <Header />
      <Footer>
        <DailyInfoCard />
        <RoomInfoCard />
      </Footer>
      <Btn>
        <button onClick ={() => setSheetVisible(true)}>
          <AiOutlinePlus />
          Start the Room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </Btn>
      <BottomSheet SheetTitle = 'start room'
      setSheetVisible={(items) => setSheetVisible(items)}
      sheetVisible={sheetVisible}
      cardDetail={data.find((items) => items.id == cardId)}
      setItemsVisible={(item) => setItemsVisible(item)}
      setSheetCreateRoom={(item) => {
        setLoaderVisibility(true);
        setTimeout(() => {
          setSheetCreateRoom(item); 
          setLoaderVisibility(false);
          }, 1000);
        }}/>
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
  overflow-y: hidden;
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
  padding: 4em 1.5em 2em 1.5em;
  position: sticky;
  left:0;
  right:0;
  top:0;
  background-image: linear-gradient(transparent 10%, #f2f0e4 80%);
  bottom:0;
  button{
    border:none;
    background-color: transparent;
    margin-left: auto;
  }
  button:first-child{
    border-radius:2em;
    background-color: #28ae61;
    color:#ffffff;
    padding:0.3em 1em;
    font-size:1.em;
    font-weight: 400;
    align-items: center;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
  }
  button:nth-child(2){
    line-height:1;
    color: var(--textColor);
  }
`;