import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import { ERROR_MESSAGES } from "../../helpers/ErrorMessages";
import * as Yup from "yup";

export const RegisterForm = ({ onSubmit }) => {
     const validationSchema = Yup.object().shape({
       username: Yup.string().required(ERROR_MESSAGES.REQUIRED_USERNAME),
       email: Yup.string()
         .email(ERROR_MESSAGES.INVALID_EMAIL)
         .required(ERROR_MESSAGES.REQUIRED_EMAIL),
       password: Yup.string()
         .min(5, ERROR_MESSAGES.MIN_PASSWORD)
         .max(10, ERROR_MESSAGES.MAX_PASSWORD)
         .matches(
           /[A-Z]/,
           ERROR_MESSAGES.PASSWORD_MATCHES_UPPERCASE
         )
         .matches(/\d/, ERROR_MESSAGES.PASSWORD_MATCHES_NUMBER)
         .required(ERROR_MESSAGES.REQUIRED_PASSWORD),
     });
    
    const dispatch = useDispatch();

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
     }
   };

        return (
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div>
                  <label>Username:</label>
                  <Field type="text" name="username" />
                  <ErrorMessage name="username" component="div" />
                </div>
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
                        <button type="submit">Register</button>
              </Form>
            )}
          </Formik>
        );
    }
