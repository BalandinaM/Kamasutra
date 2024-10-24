// import React from "react";
// import f from "./formControls.module.css";


// const FormControl = ({input, meta, ...props}) => {

//   const hasError = meta.touched && meta.error
//   return (
//     <div className={f.formControl + " " + (hasError ? f.error : '')}>
//       {props.children}
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

// export const Textarea = (props) => {
//   const {input, meta, child, ...restProps} = props;
//   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }

// export const Input = (props) => {
//   const {input, meta, child, ...restProps} = props;
//   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }

// export const Textarea = ({input, meta, ...props}) => {

//   const hasError = meta.touched && meta.error
//   return (
//     <div className={f.formControl + " " + (hasError ? f.error : '')}>
//       <textarea {...input} {...props}/>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

// export const Input = ({input, meta, ...props}) => {

//   const hasError = meta.touched && meta.error
//   return (
//     <div className={f.formControl + " " + (hasError ? f.error : '')}>
//       <input {...input} {...props}/>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }
