import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

export default function GroupCard() {
  const navigate = useNavigate();

  return (
    <GroupContainer onClick={() => navigate(`/detail`)}>
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
  )
}

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