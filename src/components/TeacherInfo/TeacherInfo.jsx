import React from "react";
import {
  FavoriteButton,
  Language,
  LessonsBar,
  LessonsDetails,
  LessonsList,
  LessonsListItem,
  Separator,
  StyledBook,
  StyledStar,
  TeacherDetails,
  TeacherDetailsTitle,
  TeacherName,
} from "./TeacherInfo.styled";
import { GoBook } from "react-icons/go";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { useAuth } from "../../hooks/useAuth";

import { db } from "../../assets/FirebaseConfig/FirebaseConfig";
import { useFavoriteTeachers } from "../../hooks/useFavorite";
import { selectFavoriteTeachers } from "../../redux/teachers/teachersSelectors";

export const TeacherInfo = ({
  lessons_done,
  rating,
  price_per_hour,
  id,
  name,
  surname,
  languages,
  lesson_info,
  conditions,
  handleClick,
  favorite,
  user,
}) => {
  return (
    <>
      <LessonsBar>
        <Language>Languages</Language>
        <LessonsList>
          
          <LessonsListItem>
           <LessonsDetails> <StyledBook />Lessons online</LessonsDetails>
            <Separator>|</Separator>
          </LessonsListItem>
          <LessonsListItem>
            <LessonsDetails>Lessons done: {lessons_done}</LessonsDetails>
            <Separator>|</Separator>
          </LessonsListItem>
          <LessonsListItem>
            <LessonsDetails>
              <StyledStar />
              Rating: {rating}
            </LessonsDetails>
            <Separator>|</Separator>
          </LessonsListItem>
          <LessonsListItem>
            <LessonsDetails>
              Price / 1 hour: <span className="price">{price_per_hour}$</span>
            </LessonsDetails>
          </LessonsListItem>
          <LessonsListItem>
            <FavoriteButton type="button" onClick={() => handleClick(id)}>
              {favorite?.find((teacher) => teacher.id === id) && user ? (
                <FaHeart color="#F4C550" />
              ) : (
                <FaRegHeart />
              )}
            </FavoriteButton>
          </LessonsListItem>
        </LessonsList>
      </LessonsBar>
      <div>
        <TeacherName>{`${name} ${surname}`}</TeacherName>
        <ul>
          <TeacherDetails>
            <TeacherDetailsTitle>
              <span>Speaks: </span>
            </TeacherDetailsTitle>
            <span className="languages">
              <LessonsDetails>{languages.join(", ")}</LessonsDetails>
            </span>
          </TeacherDetails>
          <TeacherDetails>
            <TeacherDetailsTitle>
              <span>Lesson info: </span>
              <LessonsDetails>{lesson_info}</LessonsDetails>
            </TeacherDetailsTitle>
          </TeacherDetails>
          <TeacherDetails>
            <TeacherDetailsTitle>
              <span>Conditions: </span>
              <LessonsDetails>{conditions.join(" ")}</LessonsDetails>
            </TeacherDetailsTitle>
          </TeacherDetails>
        </ul>
      </div>
    </>
  );
};
