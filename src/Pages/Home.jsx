import React from 'react'
import styled from 'styled-components';
import { useState } from'react';
import { ReactDOM } from 'react-dom';
import Header from 'Components/Header';
import MembersBtn from 'Components/MembersBtn';
import GroupCard from 'Components/GroupCard';

// 멤버 소개
const MeberContainer = styled.div`
  border : 1px solid black;
  width: 1200px;
  height: 420px;
  /* display: none; */
  margin-top: 3rem;
  margin-left: 366px;
`
const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
`
const Img = styled.img`
  width: 590px;
  height: 400px;
  margin-top: 15px;
  padding-bottom: 15px;
`

function Home() {
  const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]

  const [member, setMember] = useState('상연');

  const [toggle, setToggle] = useState(false);

  function ToggleHandler (toggle) {
    if (toggle === false) {
      return "hideToggle"
    } else {
      return "showToggle"
    }
  }
  return (
    <div>
      <Header />
      <MembersBtn />
          <MeberContainer className={ToggleHandler(toggle)}>
            <Img />
            <IntroTextBox></IntroTextBox>
          </MeberContainer>
      <GroupCard />
    </div>
  )
}

export default Home