import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  border: 2px solid #172D13;
  background-color: #f3e2d8;
  color: #172D13;
  border-radius: 10px;
  font-size: 16px;
  line-height: 18px;
  ::placeholder {
    color: #f3e2d8;
    font-size: 18px;
    font-style: italic;
  }
`
const ErrorBox = styled.div`
  color: white;
  font-size: 12px;
`

// наверное имеет смысл сделать одинаковое сообщение об ошибках на всех элементах

const TextInputWithoutLabel = ({label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorBox>{meta.error}</ErrorBox>
      ) : null}
    </div>
  );
};

export default TextInputWithoutLabel;

//разбить BoxForInput на составляющие элементы, и потом получится прям совсем конструктор который можно всячески кобинировать
// label должен быть всегда для семантики, но показывать его нужно не всегда, это надо прокидывать через пропс.
