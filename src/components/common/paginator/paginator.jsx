import React from "react";
import styled from "styled-components";



const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (i < 10) {
      pages.push(i);
    } else {
      break;
    }
  }

  // for (let i = 1; i <= pagesCount; i++) {
  //     pages.push(i);
  // }

  return (
    <WrapPages>
      <span onClick={(e) => {console.log('Prev')}}>Prev</span>
      {pages.map(p => {
        if (currentPage === p) {
          return <CurrentPage key={ pages.indexOf(p)} onClick={(e) => {onPageChanged(p)}}>{p}</CurrentPage>
        } else {
          return <Page key={ pages.indexOf(p)} onClick={(e) => {onPageChanged(p)}}>{p}</Page>
        }
      })}
      <span onClick={(e) => {console.log('Next')}}>Next</span>
    </WrapPages>
  )
}

const WrapPages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
` ;

const CurrentPage = styled.span`
  font-size: 20px;
  font-weight: 700;
  background-color: #D76F30;
  color: #172D13;
  padding: 6px 15px 5px;
`;

const Page = styled.span`
  display: inline-flex;
  padding: 8px 13px 5px;
  border: 2px solid #D76F30;
`

export default Paginator;
