// import React from 'react'
// import styled from 'styled-components'
// import { useState } from'react';
// import Letter from './Letter';
// import fakeData from 'fakeData.json';


// export default function AddLetter() {
//   const members = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "학년", "선우", "에릭"]

//   const [member, setMember] = useState('영훈');
//   const [memberOption, setMemberOption] = useState('상연');

//   const [letterlist, setLetterlist] = useState(fakeData);
//   const [nickname, setNickname] = useState('');
//   const [content, setContent] = useState('');
  
//   const addNicknameHandler = (event) => {
//     setNickname(event.target.value);
//   }

//   const addContentHandler = (event) => {
//     setContent(event.target.value);
//   }

//   // 멤버 select
//   const memberChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     if (name === 'nickname') {
//       setNickname(value);
//     } else if (name === 'content') {
//       setContent(value);
//     } else if (name ==='member') {
//       setMemberOption(value);
//     }
//   }

//   // 등록 버튼 클릭
//   const clickAddBtnHandler = () => {
//     const newLetter = {
//       id : letterlist.length + 1,
//       nickname,
//       content,
//       writeTo: memberOption,
//     }

//     if (nickname === '') {
//       alert('닉네임을 입력해주세요');
//     } else if (content === '') {
//       alert('내용을 입력해주세요');
//     } else {
//       setLetterlist([...letterlist, newLetter]);
//     }
//     setNickname("");
//     setContent("");
//   }

//   return (
//     <>
//     <Header>
//     <StyledNav>
//       {
//         members.map((value) => {
//           return <StyledMember onClick={() => {setMember(value)}}>{value}</StyledMember>
//         })
//       }
//     </StyledNav>
//     <Cotainer>
//   <div>
//   </div>
//   <NicknameWrite>
//     <AddNickname>닉네임</AddNickname> <NicknameInput placeholder='최대 20글자까지만 입력하세요' value={nickname} maxLength={20} onChange={addNicknameHandler} />
//   </NicknameWrite>
//   <ContentWrite>
//     <AddContent>내용</AddContent> <ContentInput placeholder='최대 200글자까지만 입력하세요' value={content} maxLength={200} onChange={addContentHandler} /> 
//   </ContentWrite>
//   <SelectMember>
//     <Selectbox name='member' onChange={memberChangeHandler} value={memberOption} >
//       {
//         members.map((value) => {
//           return <option value={value}>{value}</option>
//         })
//       }
//     </Selectbox><SelectSpan>멤버를 선택해주세요.</SelectSpan>
//   </SelectMember>
//   <AddBtnLocation>
//     <AddBtn onClick={clickAddBtnHandler}>등록</AddBtn>
//   </AddBtnLocation>
// </Cotainer>
// </Header>
// <Letter />
//     </>
//   )
// }

// const Header = styled.div`
//   background-color: grey;
//   padding-bottom: 30px;
//   width: 100%;
//   height: 440px;
// `
// // MembersBtn
// const StyledNav = styled.div`
//   min-width: 100px;
//   display : flex;
//   margin-left: 290px;
// `
// const StyledMember = styled.button`
//   font-size: 25px;
//   font-weight: border;
//   width: 90px;
//   height: 50px;
//   text-align: center;
//   padding: 3px;
//   background-color : white;
//   border : 2px solid black;
//   border-radius : 5px;
//   margin-top: 30px;
//   margin-left: 30px;
//   cursor: pointer;
//    &:hover{  
//     background-color : lightgray;
//   }
// `
// // AddLetter
// const Cotainer = styled.div`
//   font-size: 20px;
//   margin-top: 30px;
//   margin-right: 500px;
//   margin-left: 500px;
//   padding-top: 30px;
//   padding-bottom: 20px;
//   width: 900px;
//   background-color: white
// `
// // 닉네임 입력
// const NicknameWrite = styled.div`
//   display: flex;
//   margin-left: 110px;
// `
// const AddNickname = styled.span`
//   margin-top: 10px;
// `
// const NicknameInput = styled.textarea`
//   width: 600px;
//   height: 40px;
//   margin-left: 20px;
//   margin-bottom: 20px;
// `
// // 내용 입력
// const ContentWrite = styled.div`
//   display: flex;
//   margin-left: 110px;
// `
// const AddContent = styled.span`
//   margin-top: 35px;
// `
// const ContentInput = styled.textarea`
//   width: 600px;
//   height: 90px;
//   margin-left: 40px;  
//   margin-bottom: 10px;

//   word-wrap: break-word;
// `
// const SelectMember = styled.div`
//   display: flex;
//   flex-direction: row-reverse;
// `
// const Selectbox = styled.select`
//   text-align: center;
//   font-size: 16px;
//   width: 100px;
//   height: 30px;
//   margin-right: 110px;
// `
// const SelectSpan = styled.span`
//   font-size: 15px;
//   margin-right: 15px;
//   margin-top: 11px;
// `
// const AddBtnLocation = styled.div`
//   display: flex;
//   flex-direction: row-reverse;
//   justify-content: center;
//   margin-top: 20px;
// `
// const AddBtn = styled.button`
//   background-color: grey;
//   width: 70px;
//   height: 30px;
// `