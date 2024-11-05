import React from "react";
import styled from "styled-components";
import { useState } from "react";


const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   if (i < 10) {
  //     pages.push(i);
  //   } else {
  //     break;
  //   }
  // }

  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

let portionCount = Math.ceil(pagesCount / portionSize); //количество порций,  количество страниц делим на размер желаемой порции (100страниц(по 5 юзеров на каждой) / 10 (сколько кнопок пагинации выводить))
let [portionNumber, setPortionNumber] = useState(1); // [номер порции(начальный стейт), функция для обновления стейта] = useState(1) - передаем начальный стейт, то есть порция 1
let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //левая порция (8-1)*10+1=71
let rightPortionPageNumber = portionNumber * portionSize; //правая порция 8*10 = 80
// в процессе рендеринга и перерендеринга, порция которая будет отображаться у юзера на экране будет браться та что лежит между значениями 71 и 80, то есть 10 страниц.



  return (
    <WrapPages>
      { portionNumber > 1 && //я так понимаю это выражение если количество порций больше одного, то отрисовываем кнопку
      <Button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</Button> // кнопка для просмотра предыдущей страницы, запускается функция из useState, уменьшаем номер порции на единицу
      }
      {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber) //ищем страницу которая находится между левой и правой порцией страниц
      .map(p => {// и потом мапим результат полученный из фильтра и отрисовываем пагинацию
        if (currentPage === p) {
          return <CurrentPage key={ pages.indexOf(p)} onClick={(e) => {onPageChanged(p)}}>{p}</CurrentPage>
        } else {
          return <Page key={ pages.indexOf(p)} onClick={(e) => {onPageChanged(p)}}>{p}</Page>
        }
      })}

    { portionCount > portionNumber && // если количество порций болше чем номер порции отрисовываем кнопку некст
    <Button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</Button> }

    </WrapPages>
  )
}

const WrapPages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
` ;

const CurrentPage = styled.span`
  font-size: 20px;
  font-weight: 700;
  background-color: #D76F30;
  border-radius: 10%;
  color: #172D13;
  padding: 6px 15px 5px;
`;

const Page = styled.span`
  display: inline-flex;
  padding: 8px 13px 5px;
  border: 2px solid #D76F30;
  border-radius: 10%;
`

const Button = styled.button`
  border: none;
  border-radius: 10%;
  background-color: #D76F30;
  color: #172D13;
  padding-left: 13px;
  padding-right: 13px;
`

export default Paginator;
