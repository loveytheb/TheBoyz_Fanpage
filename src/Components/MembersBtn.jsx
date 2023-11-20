import React from 'react'
import styled from 'styled-components';
import { useState } from'react';

const StyledNav = styled.div`
  min-width: 100px;
  display : flex;
  margin-left: 290px;
  /* justify-content : space-around; */
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

function MembersBtn() {
  const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]


  const [member, setMember] = useState('');

  return (
    <div>
        <StyledNav>
          {
            members.map((value) => {
              return <StyledMember onClick={() => {setMember(value)}}>{value}</StyledMember>
            })
          }
        </StyledNav>
    </div>
  )
}

export default MembersBtn