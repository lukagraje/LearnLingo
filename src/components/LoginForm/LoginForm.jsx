import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../redux/auth/authOperations";
import { ERROR_MESSAGES } from "../../helpers/ErrorMessages";

import {
  Input,
  Title,
  Description,
  FormWrapper,
  InputWrapper,
  Button,
  ErrorMessage,
  PasswordVisibility,
  PasswordWrapper,
} from "./Form.styled";

import { FiEye, FiEyeOff } from "react-icons/fi";

export const LoginForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(ERROR_MESSAGES.INVALID_EMAIL)
      .required(ERROR_MESSAGES.REQUIRED_EMAIL),
    password: Yup.string()
      .min(5, ERROR_MESSAGES.MIN_PASSWORD)
      .max(10, ERROR_MESSAGES.MAX_PASSWORD)
      .matches(/[A-Z]/, ERROR_MESSAGES.PASSWORD_MATCHES_UPPERCASE)
      .matches(/\d/, ERROR_MESSAGES.PASSWORD_MATCHES_NUMBER)
      .required(ERROR_MESSAGES.REQUIRED_PASSWORD),
  });

  const dispatch = useDispatch();

  const [loginError, setLoginError] = useState("");
  const [visibility, setVisibility] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      resetForm();
      if (onSubmit) onSubmit();
    } catch (e) {
      console.error("Login error", e);
      setLoginError("Invalid email or password. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </Description>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <PasswordWrapper>
                <Input
                  type={visibility ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <PasswordVisibility type="button"
                onClick={() => setVisibility(!visibility)}>
                  {visibility ? <FiEyeOff/> : <FiEye/>}
                </PasswordVisibility>
              </PasswordWrapper>
            </InputWrapper>
            {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
            <Button type="submit" disabled={isSubmitting}>Login</Button>
          </Form>
        )}
      </Formik>{" "}
    </FormWrapper>
  );
};
