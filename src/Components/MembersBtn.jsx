import React from 'react'
import styled from 'styled-components';
import { useState } from'react';

export default function MembersBtn() {
  const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]

  const [member, setMember] = useState('');

  // Toggle
  const [toggle, setToggle] = useState(false);

  function onClickToggleHandler() {
    setToggle(toggle => !toggle);
  }
  function ToggleNameHandler (toggle) {
    if (toggle === false) {
      return "name"
    } else {
      return "Hide"
    }
  }

  return (
    <div>
        <StyledNav>
          {
            members.map((value) => {
              return <StyledMember key={value} onClick={() => {onClickToggleHandler(members)}}>{ToggleNameHandler(toggle)}</StyledMember>
            })
          }
        </StyledNav>
    </div>
  )
}

// MembersBtn
const StyledNav = styled.div`
  min-width: 100px;
  display : flex;
  margin-left: 290px;
`
const StyledMember = styled.button`
  font-size: 25px;
  font-weight: border;
  width: 90px;
  height: 50px;
  text-align: center;
  padding: 3px;
  background-color : white;
  border : 2px solid black;
  border-radius : 5px;
  margin-top: 30px;
  margin-left: 30px;
  cursor: pointer;
   &:hover{  
    background-color : lightgray;
  }
`