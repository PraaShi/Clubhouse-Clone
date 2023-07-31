import React from 'react'
import { Outlet } from 'react-router'
// import Welcome from './Welcome'
import styled from "styled-components";

export default function RootLayout() {
  return (
    <Root>
      <div>
        <Outlet />
      </div>
    </Root>
  )
}

const Root = styled.div`
    width:100%;
    max-width: 500px;
    margin:auto;
`;