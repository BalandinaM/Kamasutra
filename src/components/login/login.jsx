import React from "react";
import l from "./login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formControls/formControls";
import { maxLengthCreator, required } from "../../utils/validators";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={"login"} validate={[required, maxLength20]} placeholder={"login"} />
      </div>
      <div>
        <Field component={Input} name={"password"} validate={[required, maxLength20]} placeholder={"password"} />
      </div>
      <div>
        <Field component="input" type={"checkbox"} name="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <section className={l.login_page}>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </section>
  )
};

export default Login;
