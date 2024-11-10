import React from "react";
import styled from "styled-components";
import TextInputWithoutLabel from "../common/inputText/inputWithoutLabel";

const CaptchaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
`;

const Img = styled.img`
  width: 200px;
  height: 100px;
  align-self: center;
`;


const Captcha = (props) => {
  return (
    <CaptchaWrap>
      <Title>Подтвердите что вы не робот</Title>
      <Text>Введите символы указанные на картинке</Text>
      <Img src={props.urlCaptcha} alt="Captcha" />
      <TextInputWithoutLabel name="captcha" type="text" defaultValue="" />
    </CaptchaWrap>
  );
};

export default Captcha;
