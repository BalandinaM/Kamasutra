import React from "react";
import l from "./login.module.css";

const Login = (props) => {
  return (
    <section className={l.login_page}>
      <h2>Login</h2>
      <LoginForm />
    </section>
  )
}

const LoginForm = (props) => {
  return (
    <form action="">
      <div>
        <input type="text" name="login" placeholder="login" />
      </div>
      <div>
        <input type="text" name="password" placeholder="password" />
      </div>
      <div>
        <input type="checkbox" name="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
    </form>
  );
};

export default Login;
