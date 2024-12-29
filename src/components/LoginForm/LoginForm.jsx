import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authOperations";
import { ERROR_MESSAGES } from "../../helpers/ErrorMessages";

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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      resetForm();
      if (onSubmit) onSubmit();
    } catch (e) {
      console.error("Login error", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};
