import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox
