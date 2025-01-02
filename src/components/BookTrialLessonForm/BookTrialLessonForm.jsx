import * as Yup from "yup";
import { ERROR_MESSAGES } from "../../helpers/ErrorMessages";
import {
  FormTitle,
  Form,
  Button,
  InputWrapper,
  ErrorMessage,
} from "./BookTrialLessonForm.styled";
import { useState } from "react";

import { IMaskInput } from "react-imask";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { Formik } from "formik";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, ERROR_MESSAGES.MIN_NAME)
    .max(20, ERROR_MESSAGES.MAX_NAME)
    .required(ERROR_MESSAGES.REQUIRED_NAME),
  email: Yup.string().required(ERROR_MESSAGES.REQUIRED_EMAIL),
  number: Yup.string()
    .min(9, ERROR_MESSAGES.MIN_PHONE)
    .required(ERROR_MESSAGES.REQUIRED_PHONE),
});

const options = [
  { name: "Career and business", id: "1" },
  { name: "Lesson for kids", id: "2" },
  { name: "Living abroad", id: "3" },
  { name: "Exams and coursework", id: "4" },
  { name: "Culture, travel or hobby", id: "5" },
];

export const BookTrialLessonForm = ({ languages, onSubmit }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.length === 1 ? languages[0] : ""
  );

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSub = (values) => {
    console.log(values);
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      {languages.length > 1 && (
        <FormControl style={{ marginBottom: 20 }}>
          <FormTitle>Select the language you want to learn:</FormTitle>
          <RadioGroup
            aria-label="language"
            name="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {languages.map((language, index) => (
              <FormControlLabel
                key={index}
                value={language}
                control={<Radio />}
                label={language}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
      {selectedLanguage && (
        <FormControl>
          <FormTitle>
            What is your main reason for learning {selectedLanguage}?
          </FormTitle>
          <Formik
            initialValues={{
              email: "",
              fullName: "",
              number: "",
              lesson: options[0].name,
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSub}
          >
            {({
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              handleBlur,
              handleChange,
              values,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <RadioGroup style={{marginBottom: 20}}
                  aria-label="select option"
                  name="lesson"
                  value={values.lesson}
                  onChange={handleChange}
                >
                  {options.map(({ name, id }) => (
                    <FormControlLabel
                      key={id}
                      value={name}
                      label={name}
                      name="lesson"
                      control={
                        <Radio
                          sx={{
                            color: "#12141733",
                            "&.Mui-checked": {
                              color: "#F4C550",
                            },
                          }}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
                <div>
                  <InputWrapper>
                    <input
                      type="text"
                      name="fullName"
                      onBlur={handleBlur}
                      placeholder="Full Name"
                      value={values.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && touched.fullName ? (
                      <ErrorMessage>{errors.fullName}</ErrorMessage>
                    ) : null}
                  </InputWrapper>
                  <InputWrapper>
                    <input
                      type="text"
                      name="email"
                      onBlur={handleBlur}
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email ? (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    ) : null}
                  </InputWrapper>
                  <InputWrapper>
                    <IMaskInput
                      mask="48 000-000-000"
                      placeholder="Phone number"
                      unmask={false}
                      name="number"
                      value={values.number}
                      onBlur={handleBlur}
                      onAccept={(value) => setFieldValue("number", value)}
                    />
                    {errors.number && touched.number ? (
                      <ErrorMessage>{errors.number}</ErrorMessage>
                    ) : null}
                  </InputWrapper>
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  Book
                </Button>
              </Form>
            )}
          </Formik>
        </FormControl>
      )}
    </div>
  );
};
