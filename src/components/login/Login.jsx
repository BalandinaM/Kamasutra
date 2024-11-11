import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../common/inputText/TextInput";
import Checkbox from "../common/checkbox/checkbox";
import Captcha from "./Captcha";
import Button from "../common/Button/Button";

const Login = (props) => {

  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    props.login(values.email, values.password, values.rememberMe, values.captcha);
    setSubmitting(false);
  }

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <Section>
      <Title>Авторизация</Title>
      <LoginForm onSubmit={ submit }
                isCaptcha={ props.isCaptcha }
                urlCaptcha = { props.urlCaptcha }
                iserror={props.iserror}
                messageError={props.messageError}/>
    </Section>
  );
};

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={Yup.object({
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        rememberMe: Yup.boolean(),
        captcha: Yup.string(),
      })}
      onSubmit={props.onSubmit}
    >
      <FormStyled>
        <TextInput label="Логин" name="email" type="email" placeholder="name@email.ru"/>
        <TextInput label="Пароль" name="password" type="password"/>
        {/* {props.iserror ? <div>{props.messageError}</div> : null } */}
        <Checkbox name="rememberMe">Запомнить меня</Checkbox>
        { props.isCaptcha ? <Captcha urlCaptcha = {props.urlCaptcha}/> : null}
        <Button type="submit">Авторизоваться</Button>
      </FormStyled>
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isCaptcha: state.auth.isCaptcha,
  urlCaptcha: state.auth.urlCaptcha,
  iserror: state.auth.iserror,
  messageError: state.auth.messageError,
});

export default connect(mapStateToProps, { login })(Login);

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: stretch;
`;

const Section = styled.section`
  width: 400px;
  margin: 80px auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 30px;
`;
