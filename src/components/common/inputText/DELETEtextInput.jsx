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

//display
//align-items
//justify-content
//gap


const Label = styled.label`
  color: green;
  font-size: 24px;
  line-height: 28px;
  font-style: italic;
`
//color (возможно он должен задаватьсяв вообще в глобальных стилях)
//font-size возмодно имеет смысле реализовать через переменные как у академии
//lineheight обычно чуть больше чем font-size м.б. считать как нибуть с помощью джс
// display в зависимости от props


const Input = styled.input`
  padding: 5px;
  border: 2px solid blue;
  font-size: 24px;
  line-height: 28px;
  color: pink;
`

//padding
//border
//font-size возмодно имеет смысле реализовать через переменные как у академии
//lineheight обычно чуть больше чем font-size м.б. считать как нибуть с помощью джс
//color
// еще посмотреть как стилизовать плейсхолдер

const ErrorBox = styled.div`
  background-color: red;
  color: white;
  font-size: 34px;
`

// наверное имеет смысл сделать одинаковое сообщение об ошибках на всех элементах

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

//разбить BoxForInput на составляющие элементы, и потом получится прям совсем конструктор который можно всячески кобинировать
// label должен быть всегда для семантики, но показывать его нужно не всегда, это надо прокидывать через пропс.
