import React from "react";
import l from "./login.module.css";
import { Field, reduxForm } from "redux-form";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder={"login"} />
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder={"password"} />
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
