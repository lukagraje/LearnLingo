import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import { ERROR_MESSAGES } from "../../helpers/ErrorMessages";
import * as Yup from "yup";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { useState } from "react";

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
} from "../LoginForm/Form.styled";

export const RegisterForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(ERROR_MESSAGES.REQUIRED_USERNAME),
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

  const [visibility, setVisibility] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Form data:", values);
    try {
      await dispatch(
        registerUser({
          email: values.email,
          password: values.password,
          username: values.username,
        })
      ).unwrap();
      resetForm();
      if (onSubmit) onSubmit();
    } catch (e) {
      console.error("Registration error", e);
      setRegisterError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Description>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="name"
                name="username"
                placeholder="Name"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputWrapper>
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
                <PasswordVisibility
                  type="button"
                  onClick={() => setVisibility(!visibility)}
                >
                  {visibility ? <FiEyeOff /> : <FiEye />}
                </PasswordVisibility>
              </PasswordWrapper>
            </InputWrapper>
            {registerError && <ErrorMessage>{registerError}</ErrorMessage>}
            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
