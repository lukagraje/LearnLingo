import { BookTrialLessonForm } from "../BookTrialLessonForm/BookTrialLessonForm";
import {
  Section,
  Title,
  Description,
  WrapperTeacher,
  Image,
  TeacherTitle,
  TeacherName,
} from "./BookTrialLesson.styled";

export const BookTrialLesson = ({ teacher, onSubmit }) => {
  return (
    <Section>
      <Title>Book trial lesson</Title>
      <Description>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Description>
      <WrapperTeacher>
        <Image
          src={teacher.avatar_url}
          alt={teacher.name}
          width="44"
          height="44"
        />

        <div>
          <TeacherTitle>Your teacher</TeacherTitle>
          <TeacherName>{teacher.name}</TeacherName>
        </div>
      </WrapperTeacher>
      <BookTrialLessonForm languages={teacher.languages} onSubmit={onSubmit} />
    </Section>
  );
};
