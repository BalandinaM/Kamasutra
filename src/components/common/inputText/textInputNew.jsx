import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const BoxForInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Label = styled.label`
  //visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  font-size: 20px;
  line-height: 24px;
  color: #D76F30;
`
const Input = styled.input`
  visibility: visible;
  padding: 10px 20px;
  border: 2px solid #172D13;
  background-color: #8bf478;
  color: #172D13;
  border-radius: 10px;
  font-size: 16px;
  line-height: 18px;
  ::placeholder {
    color: #8bf478;
    font-size: 18px;
    font-style: italic;
  }
`
const ErrorBox = styled.div`
  color: white;
  font-size: 12px;
`

// наверное имеет смысл сделать одинаковое сообщение об ошибках на всех элементах

const TextInput = ({label, ...props }) => {
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

//разбить BoxForInput на составляющие элементы, и потом получится прям совсем конструктор который можно всячески кобинировать
// label должен быть всегда для семантики, но показывать его нужно не всегда, это надо прокидывать через пропс.
