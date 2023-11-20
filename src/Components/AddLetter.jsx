import React from 'react'
import styled from 'styled-components'
import { useState } from'react';

const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  margin-top: 30px;
  margin-right: 500px;
  margin-left: 500px;
  width: 900px;
  border: 1px solid black;
`
const Selectbox = styled.select`
  font-size: 20px;
  text-align: center;
  width: 100px;
  height: 30px;
`
const NicknameInput = styled.input`
  width: 600px;
  height: 30px;
  margin-bottom: 10px;
`

const ContentInput = styled.input`
  width: 600px;
  height: 70px;
  margin-bottom: 10px;
`

function AddLetter() {

  const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]

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

  const [member, setMember] = useState('상연');
  const [memberOption, setMemberOption] = useState('');

  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');

  const addNicknameHandler = (event) => {
    setNickname(event.target.value);
  }

  const addContentHandler = (event) => {
    setContent(event.target.value);
  }


  // 멤버 select
  const memberChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'nickname') {
      setNickname(value);
    } else if (name === 'content') {
      setContent(value);
    } else if (name ==='member') {
      setMemberOption(value);
    }
  }

  // 등록 버튼 클릭
  const clickAddBtnHandler = () => {
    const newLetter = {
      id : letterlist.length + 1,
      nickname,
      content,
      writeTo: memberOption,
    }

    if (nickname === '') {
      alert('닉네임을 입력해주세요');
    } else if (content === '') {
      alert('내용을 입력해주세요');
    } else {
      setLetterlist([...letterlist, newLetter]);
    }
    setNickname('');
    setContent('');
  }

  return (
        <Cotainer>
      <div>
        멤버를 선택해주세요. <Selectbox name='member' onChange={memberChangeHandler} value={memberOption} >
          {
            members.map((value) => {
              return <option value={value}>{value}</option>
            })
          }
        </Selectbox>
      </div>
      <div>
        닉네임 <NicknameInput placeholder='닉네임을 입력해주세요' value={nickname} onChange={addNicknameHandler} />
      </div>
      <div>
        내용 <ContentInput placeholder='내용을 입력해주세요' value={content} onChange={addContentHandler} /> 
      </div>
      <div>
        <button onClick={clickAddBtnHandler}>등록</button>
      </div>
    </Cotainer>
  )
}

export default AddLetter