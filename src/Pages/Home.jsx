import React from 'react'
import styled from 'styled-components';
import { useState } from'react';
import { ReactDOM } from 'react-dom';

// Header
const StyledHead = styled.div`
  background-image : url("https://pbs.twimg.com/profile_banners/841676129245224961/1698937490/1500x500");
  background-size: contain;
  width : 100%;
  height : 320px;
`
const StyledTitle = styled.h1`
  color : white;
  font-size : 55px;
  text-align : center;
  padding-top: 180px;
`
const LetterLinkBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  width: 70px;
  height: 40px;
`

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
// 멤버 소개
const MeberContainer = styled.div`
  border : 1px solid black;
  width: 1200px;
  height: 420px;
  /* display: none; */
  margin-top: 3rem;
  margin-left: 366px;
`
// 그룹 소개
const GroupContainer = styled.div`
  border : 1px solid black;
  width: 1200px;
  height: 420px;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-left: 366px;

  cursor: pointer;
`
// 그룹 사진
const Img = styled.img`
  width: 590px;
  height: 400px;
  margin-top: 15px;
  padding-bottom: 15px;
`
// 그룹 소개 내용
const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
`
const GroupMemberName = styled.span`
  font-size: 45px;
  margin-top: 70px;
  margin-left: 15px;
  margin-bottom: 50px;
`
const GroupMean = styled.span`
  font-size: 20px;
  margin-left: 15px;
`
const GroupDebut = styled.span`
  font-size: 27px;
  margin-left: 140px;
`
const GroupIntro = styled.span`
  font-size: 27px;
  margin-top: 10px;
  margin-left: 140px;
`
const FanNameMean = styled.span`
  font-size: 16px;
  margin-left: 15px;
`

function Home() {
  const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]

  const [member, setMember] = useState('상연');

  const LetterLinkClickHandler = () => {
    alert('버튼 정상 작동 중')
  }

  // Toggle
  const [toggle, setToggle] = useState(false);

  function onClickToggleHandler() {
    setToggle(toggle => !toggle);
  }
  function ToggleHandler (toggle) {
    if (toggle === false) {
      return "hideToggle"
    } else {
      return "showToggle"
    }
  }
  function ToggleNameHandler (toggle) {
    if (toggle === false) {
      return "Letter"
    } else {
      return "Hide"
    }
  }
  

  return (
    <div>
         <StyledHead>
          <LetterLinkBtn onClick={LetterLinkClickHandler}>Letter</LetterLinkBtn>  
          <StyledTitle>THEBOYZ FanClub</StyledTitle>
        </StyledHead>
        <StyledNav>
          {
            members.map((value) => {
              return <StyledMember key={value} onClick={onClickToggleHandler}>{ToggleNameHandler(toggle)}</StyledMember>
            })
          }
        </StyledNav>
          <MeberContainer className={ToggleHandler(toggle)}>
            <Img />
            <IntroTextBox></IntroTextBox>
          </MeberContainer>
          <GroupContainer>
            <Img src="https://pbs.twimg.com/media/F-Nzr1mbwAA14v-?format=jpg&name=small" />
            <IntroTextBox>
            <GroupMemberName>더보이즈 (TheBoyz)<GroupMean>단 하나의 소년들</GroupMean></GroupMemberName>
            <GroupDebut>데뷔 : 2017. 12. 06.</GroupDebut>
            <GroupIntro>데뷔 앨범 : The First</GroupIntro>
            <GroupIntro>반장 : 상연</GroupIntro>
            <GroupIntro>소속사 : IST ent.</GroupIntro>
            <GroupIntro>팬덤 : 더비 (The B)<FanNameMean>더보이즈의 비타민</FanNameMean></GroupIntro>
            </IntroTextBox>
          </GroupContainer>
    </div>
  )
}

export default Home