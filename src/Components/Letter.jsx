import React from 'react'
import styled from 'styled-components';
import { useState } from'react';

const LetterContainer = styled.div`
  /* display: flex; */
  border: 1px solid black;
  font-size: 20px;
  width: 300px;
  margin-top: 30px;
  margin-left: 100px;
`

function Letter() {

  const [member, setMember] = useState('상연');

  const [letterlist, setLetterlist] = useState([
    { id: 1, nickname: "반장체고", content: "장모님이 기다려", writeTo: "상연"},
    { id: 2, nickname: "천사토끼", content: "토끼 지켜", writeTo: "제이콥"},
    { id: 3, nickname: "빵뭉이", content: "울 영훈이 빵담빵담", writeTo: "영훈"},
    { id: 4, nickname: "횬뽀메", content: "이재현 하트해", writeTo: "현재"},
    { id: 5, nickname: "아기볶음밥", content: "이주연 섹시하다", writeTo: "주연"},
    { id: 6, nickname: "Moon", content: "천재 화가 문형서", writeTo: "케빈"},
    { id: 7, nickname: "아기물만두", content: "찬희야 까만 밤 보내", writeTo: "뉴"},
    { id: 8, nickname: "흡혈다람쥐", content: "이번 앨범 완전 기대된다", writeTo: "큐"},
    { id: 9, nickname: "주라기공원", content: "다치지마 건강이 제일 중요해", writeTo: "학년"},
    { id: 10, nickname: "서누선우", content: "랩 천재 김선우", writeTo: "선우"},
    { id: 11, nickname: "아기망고", content: "울 영재 너무 귀여워", writeTo: "에릭"},
  ]);

  return (
    <div>
    {
      letterlist.filter(function (value) {
        return value.writeTo === member;
      })
      .map((item) => {
        return (
          <LetterContainer key={item.id}>
            <p>닉네임 : {item.nickname}</p>
            <p>내용 : {item.content}</p>
          </LetterContainer>
        )
      })
    }
  </div>
  )
}

export default Letter