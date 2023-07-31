import React from 'react'
import styled from "styled-components"
import Header from '../Components/Header';
import DailyInfoCard from '../Components/DailyInfoCard';

export default function Home() {
  return (
    <Hom>
      <Header />
      <Footer>
        <DailyInfoCard />
      </Footer>
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