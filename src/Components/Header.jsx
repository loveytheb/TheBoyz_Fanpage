import React from 'react'
import styled from "styled-components";

export default function Header() {

  return (
    <div>
        <StyledHead>
          <StyledTitle>THEBOYZ FanClub</StyledTitle>
        </StyledHead>
    </div>
  )
}

const StyledHead = styled.div`
  background-image : url("https://pbs.twimg.com/profile_banners/841676129245224961/1698937490/1500x500");
  background-size: contain;
  width : 100%;
  height : 320px;
`

const StyledTitle = styled.h1`
  color : white;
  font-size : 55px;
  /* font-weight : bolder; */
  text-align : center;
  padding-top: 230px;
`;