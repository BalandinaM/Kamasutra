import React from "react";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
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
        //.required('Required')//для примера, для этого чекбокса эта проверка не нужна
        //.oneOf([true], 'You must accept the terms and conditions.'),
        captcha: Yup.string(),
        //.required("Required"),
      })}
      onSubmit={props.onSubmit}
    >
      <Form>
        <TextInput label="email" name="email" type="email" placeholder="name@email.ru"/>
        <TextInput label="password" name="password" type="password" />
        <Checkbox name="rememberMe">Запомнить</Checkbox>
        <div>
          <h3>Подтвердите что вы не робот</h3>
          <p>Введите цифры указанные на картинке</p>
          <img src={props.urlCaptcha} alt="Captcha" />
          <TextInput label="captcha" name="captcha" type="text" defaultValue=""/>
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

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

  if (props.isCaptcha) {
    console.log("Captha");
    // return (
    //   <div>
    //     <h3>Подтвердите что вы не робот</h3>
    //     <p>Введите цифры указанные на картинке</p>
    //     <img src={props.urlCaptcha} alt="Captcha" />
    //     <input type="text" />
    //   </div>
    // )
  }

  return (
    <section>
      <h2>Login</h2>
      <LoginForm onSubmit={ submit } isCaptcha={ props.isCaptcha } urlCaptcha = { props.urlCaptcha } />
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isCaptcha: state.auth.isCaptcha,
  urlCaptcha: state.auth.urlCaptcha,
});

export default connect(mapStateToProps, { login })(Login);

// const validate = values => {  перенесли в константу formik в validationSchema
//   const errors = {};
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length > 30) {
//     errors.password = 'Must be 30 characters or less';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const LoginForm = (props) => {
//   const formik = useFormik({ вместо этого хука используем тег Formik
//     initialValues: {
//       email: "",
//       password: "",
//       remember: "",
//     },
//     validationSchema: Yup.object({
//       password: Yup.string()
//         .max(15, "Must be 15 characters or less")
//         .required("Required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Required"),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         //name="email"
//         type="email"
//         // onChange={formik.handleChange}// getFieldProps, собрал в себя onChange, onBlur, value
//         // onBlur={formik.handleBlur}
//         // value={formik.values.email}
//         {...formik.getFieldProps("email")}
//       />
//       {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         // name="password"
//         type="password"
//         // onChange={formik.handleChange}
//         // onBlur={formik.handleBlur}
//         // value={formik.values.password}
//         {...formik.getFieldProps("password")}
//       />
//       {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
//       <label htmlFor="remember">Remember me</label>
//       <input
//         id="remember"
//         //name="remember"
//         type="checkbox"
//         // onChange={formik.handleChange}
//         // value={formik.values.remember}
//         {...formik.getFieldProps("remember")}
//       />
//       <button type="submit">Login</button>
//     </form>
//   )
// }

// const LoginForm = (props) => { //возвращаем встроенный тег библиотеки <Formik/>
//   return (
//     <Formik
//       initialValues = {{
//         email: "",
//         password: "",
//         remember: "",
//       }}

//       validationSchema = {Yup.object({
//         password: Yup.string()
//           .max(15, "Must be 15 characters or less")
//           .required("Required"),
//         email: Yup.string()
//           .email("Invalid email address")
//           .required("Required"),
//       })}

//       onSubmit = {(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {formik => (
//         <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           type="email"
//           {...formik.getFieldProps("email")}
//         />
//         {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           {...formik.getFieldProps("password")}
//         />
//         {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
//         <label htmlFor="remember">Remember me</label>
//         <input
//           id="remember"
//           type="checkbox"
//           {...formik.getFieldProps("remember")}
//         />
//         <button type="submit">Login</button>
//       </form>
//       )}
//     </Formik>
//   );
// };

// Используем встроенные теги библиотеки Field, Form, ErrorMessage

// const LoginForm = (props) => {
//   return (
//     <Formik
//       initialValues={{ email: "", password: "", remember: "" }}
//       validationSchema={Yup.object({
//         password: Yup.string()
//           .max(15, "Must be 15 characters or less")
//           .required("Required"),
//         email: Yup.string().email("Invalid email address").required("Required"),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       <Form>
//         <label htmlFor="email">Email Address</label>
//         <Field name="email" type="email" />
//         <ErrorMessage name="email" />

//         <label htmlFor="password">Password</label>
//         <Field name="password" type="password" />
//         <ErrorMessage name="password" />

//         <label htmlFor="remember">Remember me</label>
//         <Field name="remember" type="checkbox" />

//         <button type="submit">Login</button>
//       </Form>
//     </Formik>
//   );
// };

// Рефакторим код создаем поля для перетспользования (в тутториале для селектора и текстареа еще есть примеры)
//итого рефактора используется, она в начале скрипта
