import styled from "styled-components";

export const FormTitle = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: block;
  & .radio_group {
    margin-bottom: 40px;
  }

  & input {
    display: block;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    outline: none;
    padding: 16px 18px;

    color: var(--main-text-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.37;
    transition: border var(--transition);

    &::placeholder {
      color: var(--main-text-color);
    }

    &:focus {
      border: 1px solid var(--active-button-background-color);
    }
  }
`;

export const InputWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000c2;
  margin-top: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 40px;
  width: 100%;
  border-radius: 12px;
  background-color: var(--button-color);
  border: none;
  padding: 16px 0;

  color: var(--main-text-color);

  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--button-active-color);
  }
`;
