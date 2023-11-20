// import React from 'react'
// import styled from 'styled-components'
// import { useState } from'react';
// import fakeData from 'fakeData.json';

// export default function Letter( item ) {
//   const [letterlist, setLetterlist] = useState(fakeData);

//   const DeleteLetterHandler = (id) => {
//     const newLetter = letterlist.filter((letterlist) => {
//       return letterlist.id !== id;
//     });
//     setLetterlist(newLetter);
//   }
//   return (
//     <LetterContainer key={item.id}>
//       <UserInfo>
//       <UserPhoto>
//         <img />
//       </UserPhoto>
//       <NicknameAndText>{item.nickname}</NicknameAndText>
//       </UserInfo>
//       <ContentText>{item.content}</ContentText>
//       <LetterBtn>
//       <DeleteBtn onClick={() => {DeleteLetterHandler(item.id)}}>삭제</DeleteBtn>
//       <ChangeBtn>수정</ChangeBtn>
//       </LetterBtn>
//     </LetterContainer>
//   )
// }

// const LetterContainer = styled.div`
//   font-size: 20px;
//   width: 910px;
//   height: 220px;
//   padding-top: 15px;
//   margin-top: 30px;
//   margin-left: 100px;
//   border: 2px solid black;
// `
// const UserInfo = styled.div`
//   background-color: green;
// `
// const UserPhoto = styled.div`
//   background-color: blue;
// `
// const NicknameAndText = styled.p`
//   font-size: 15px;
//   height: 20px;
//   display: flex;
//   flex-direction: row-reverse;
//   padding-right: 15px;
//   padding-bottom: 10px;
//   font-weight: bold;
// `
// const ContentText = styled.p`
//   font-size: 20px;
//   line-height: 28px;
//   height: 120px;
//   padding-left: 10px;
//   padding-right: 10px;
//   padding-bottom: 10px;
//   margin-top: 10px;
//   /* white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis; */
// `
// const LetterBtn = styled.div`
//   display: flex;
//   flex-direction: row-reverse;
//   margin-top: 10px;
//   margin-right: 10px;
//   padding-bottom: 10px;
//   border-radius: 5px;
// `
// const DeleteBtn = styled.button`
//   background-color: grey;
//   width: 70px;
//   height: 30px;
// `
// const ChangeBtn = styled.button`
//   background-color: grey;
//   width: 70px;
//   height: 30px;
//   margin-right: 10px;
// `