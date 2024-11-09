import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const BoxForInput = styled.div`
  padding: 50px;
  border: 5px solid red;
  background-color: yellow;
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Label = styled.label`
  color: green;
  font-size: 24px;
  line-height: 28px;
  font-style: italic;
`

const Input = styled.input`
  padding: 5px;
  border: 2px solid blue;
  font-size: 24px;
  line-height: 28px;
  color: pink;
`
const ErrorBox = styled.div`
  background-color: red;
  color: white;
  font-size: 34px;
`

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <BoxForInput>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorBox>{meta.error}</ErrorBox>
      ) : null}
    </BoxForInput>
  );
};

export default TextInput;
