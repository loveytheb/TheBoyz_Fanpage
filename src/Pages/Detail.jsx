import React from 'react'
import styled from'styled-components';
import { useState } from'react';

const Header = styled.div`
  background-color: grey;
  padding-bottom: 30px;
  width: 100%;
  height: 440px;
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
// AddLetter
const Cotainer = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-right: 500px;
  margin-left: 500px;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 900px;
  background-color: white
`
// 닉네임 입력
const NicknameWrite = styled.div`
  display: flex;
  margin-left: 110px;
`
const AddNickname = styled.span`
  margin-top: 10px;
`
const NicknameInput = styled.textarea`
  width: 600px;
  height: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
`
// 내용 입력
const ContentWrite = styled.div`
  display: flex;
  margin-left: 110px;
`
const AddContent = styled.span`
  margin-top: 35px;
`
const ContentInput = styled.textarea`
  width: 600px;
  height: 90px;
  margin-left: 40px;  
  margin-bottom: 10px;

  word-wrap: break-word;
`
const SelectMember = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const Selectbox = styled.select`
  text-align: center;
  font-size: 16px;
  width: 100px;
  height: 30px;
  margin-right: 110px;
`
const SelectSpan = styled.span`
  font-size: 15px;
  margin-right: 15px;
  margin-top: 11px;
`
const AddBtnLocation = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 20px;
`
const AddBtn = styled.button`
  background-color: grey;
  width: 70px;
  height: 30px;
`
// Letter 정렬
const LetterList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 10px 400px;
`
// Letter 박스
const LetterContainer = styled.div`
  font-size: 20px;
  width: 910px;
  height: 220px;
  padding-top: 15px;
  margin-top: 30px;
  margin-left: 100px;
  border: 2px solid black;
`
const NicknameText = styled.p`
  font-size: 15px;
  height: 20px;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 15px;
  padding-bottom: 10px;
  font-weight: bold;
`
const ContentText = styled.p`
  font-size: 20px;
  line-height: 28px;
  height: 120px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`
const LetterBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  margin-right: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
`
const DeleteBtn = styled.button`
  background-color: grey;
  width: 70px;
  height: 30px;
`
const ChangeBtn = styled.button`
  background-color: grey;
  width: 70px;
  height: 30px;
  margin-right: 10px;
`

function Detail() {
  const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]

  const [letterlist, setLetterlist] = useState([
    { id: 1, nickname: "반장체고", content: "최고의 리더, 언제나 우리 곁을 지켜줘서 고마워. 우리 앞으로도 오래오래 함께하자. 내가 많이 사랑해. ", writeTo: "상연"},
    { id: 2, nickname: "천사토끼", content: "토끼 지켜", writeTo: "제이콥"},
    { id: 3, nickname: "빵뭉이", content: "영훈아 요즘 컴백이랑 콘서트 준비 하느라 엄청 바쁠텐데 매일매일 찾아와줘서 너무 고마워. 오늘 하루도 너무너무 수고 많았어 !! 쩡담쩡담 !! 내일도  나랑 같이 빵이팅하자.  언제나 나를 행복하게 만들고 힘낼 수 있게 만들어줘서 너무 고마워. 나도 영훈이 지금보다 더더더 행복하게 웃게 해줄게. 우리 같이 행복해지자 ㅎㅎ 오늘도 내가 많이 사랑해 잘자 !!", writeTo: "영훈"},
    { id: 4, nickname: "횬뽀메", content: "재현아 내 행복이 되어줘서 너무 고마워. 내가 행복한 만큼 너도 더더더 행복했으면 좋겠어. 어제보다 오늘 더, 오늘보다 내일 더 하트해.", writeTo: "현재"},
    { id: 5, nickname: "아기볶음밥", content: "이주연 섹시하다", writeTo: "주연"},
    { id: 6, nickname: "Moon", content: "천재 화가 문형서", writeTo: "케빈"},
    { id: 7, nickname: "아기물만두", content: "찬희야 까만 밤 보내", writeTo: "뉴"},
    { id: 8, nickname: "흡혈다람쥐", content: "이번 앨범 완전 기대된다", writeTo: "큐"},
    { id: 9, nickname: "주라기공원", content: "다치지마 건강이 제일 중요해", writeTo: "학년"},
    { id: 10, nickname: "서누선우", content: "랩 천재 김선우", writeTo: "선우"},
    { id: 11, nickname: "아기망고", content: "울 영재 너무 귀여워", writeTo: "에릭"},
  ]);

  const [member, setMember] = useState('상연');
  const [memberOption, setMemberOption] = useState('상연');

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
    setNickname("");
    setContent("");
  }

  // 삭제 버튼
  const DeleteLetterHandler = (id) => {
    const newLetter = letterlist.filter((letterlist) => {
      return letterlist.id !== id;
    });
    setLetterlist(newLetter);
  }

  return (
    <>
      <Header>
        <StyledNav>
          {
            members.map((value) => {
              return <StyledMember onClick={() => {setMember(value)}}>{value}</StyledMember>
            })
          }
        </StyledNav>
        <Cotainer>
      <div>
      </div>
      <NicknameWrite>
        <AddNickname>닉네임</AddNickname> <NicknameInput placeholder='최대 20글자까지만 입력하세요' value={nickname} maxLength={20} onChange={addNicknameHandler} />
      </NicknameWrite>
      <ContentWrite>
        <AddContent>내용</AddContent> <ContentInput placeholder='최대 200글자까지만 입력하세요' value={content} maxLength={200} onChange={addContentHandler} /> 
      </ContentWrite>
      <SelectMember>
        <Selectbox name='member' onChange={memberChangeHandler} value={memberOption} >
          {
            members.map((value) => {
              return <option value={value}>{value}</option>
            })
          }
        </Selectbox><SelectSpan>멤버를 선택해주세요.</SelectSpan>
      </SelectMember>
      <AddBtnLocation>
        <AddBtn onClick={clickAddBtnHandler}>등록</AddBtn>
      </AddBtnLocation>
    </Cotainer>
      </Header>
    <LetterList>
    {
      letterlist.filter(function (value) {
        return value.writeTo === member;
      })
      .map((item) => {
        return (
          <LetterContainer key={item.id}>
            <NicknameText>{item.nickname}</NicknameText>
            <ContentText>{item.content}</ContentText>
            <LetterBtn>
            <DeleteBtn onClick={() => {DeleteLetterHandler(item.id)}}>삭제</DeleteBtn>
            <ChangeBtn>수정</ChangeBtn>
            </LetterBtn>
          </LetterContainer>
        )
      })
    }
  </LetterList>
    </>
  )
}

export default Detail