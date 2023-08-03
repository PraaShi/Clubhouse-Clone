import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import styled from "styled-components"
import StartRoom from './bottom_sheet/StartRoom'

export default function BottomSheet(props) {
  return (
    <Hey>
        <SwipeableBottomSheet open={props.sheetVisible}
        onChange={() => {
            props.setSheetVisible(!props.sheetVisible)
            props.setItemsVisible(true)
        }}
        fullScreen={props.SheetTitle == 'room detail' ? true:false}>
       
       <Swipe>
            <StartRoom setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={(item) => {
                props.setSheetVisible(item);
                props.setItemsVisible(true)
            }} />
        </Swipe>
        </SwipeableBottomSheet>
    </Hey>
  )
}
const Swipe = styled.div`
    background-color: #ffffff;
    background-color: ${props => props.SheetTitle =='profile'? 'transparent' : ''};
    border-radius:1.5em 1.5em  0 0 ;
    padding:1.5em 1em;
    position:relative;
    /* z-index:4; */
    height:100%;
`;

const Hey = styled.div`
    position:relative;
    z-index:2;
    /* width:100%; */
    max-width:500px;   
`;