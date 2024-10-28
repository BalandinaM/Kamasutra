//Реализация на Redax-Form, оставить на память)

// import React from "react";
// import l from "./login.module.css";
// import { Field, reduxForm } from "redux-form";
// import { Input } from "../common/formControls/formControls";
// import { maxLengthCreator, required } from "../../utils/validators";
// import { login } from "../../redux/authReducer";
// import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";

// const maxLength60 = maxLengthCreator(60);

// const LoginForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field component={Input}
//         name={"email"}
//         validate={[required, maxLength60]}
//         placeholder={"email"} />
//       </div>
//       <div>
//         <Field component={Input}
//         name={"password"}
//         validate={[required, maxLength60]}
//         placeholder={"password"}
//         type={"password"}/>
//       </div>
//       <div>
//         <Field component="input" type={"checkbox"} name="rememberMe" />
//         <label htmlFor="remember">Remember me</label>
//       </div>
//       {props.error && <div className={l.login_error}>
//           {props.error}
//         </div>
//       }
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   );
// };

// const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

// const Login = (props) => {
//   const onSubmit = (formData) => {
//     console.log(formData);
//     props.login(formData.email, formData.password, formData.rememberMe)
//   };

//   if (props.isAuth) {
//     return <Navigate to="/profile" />
//   }

//   if (props.isCaptcha) {
//     console.log("Captha")
//   }

//   return (
//     <section className={l.login_page}>
//       <h2>Login</h2>
//       <LoginReduxForm onSubmit={onSubmit} />
//     </section>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   isCaptcha: state.auth.isCaptcha,
// })

// export default connect(mapStateToProps, {login})(Login)
