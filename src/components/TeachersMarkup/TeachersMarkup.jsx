import React from "react";
import { StyledBadge } from "../StyledBadge/StyledBadge";
import { Avatar } from "@mui/material";
import { TeacherInfo } from "../TeacherInfo/TeacherInfo";
import { BookTrialLesson } from "../BookTrialLesson/BookTrialLesson";
import { ReadMoreMarkup } from "../ReadMoreMarkup/ReadMoreMarkup";
import { NotAuth } from "../NotAuth/NotAuth";
import {
  TeachersList,
  TeacherItem,
  WrapperAvatar,
  Wrapper,
  LevelsList,
  LevelsItem,
  BookLessonButton,
  ReadMoreButton,
} from "./TeachersMarkup.styled";

import { useState } from "react";
import { useModal } from "../../helpers/useModal";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../Modal/Modal";
import { useFavoriteTeachers } from "../../hooks/useFavorite";

import { set, ref, remove } from "firebase/database";
import { db, auth } from "../../assets/FirebaseConfig/FirebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";

export const TeachersMarkup = ({ teachers }) => {
  const [visibility, setVisibility] = useState({});
  const [teacher, setTeacher] = useState();
  const { modalState, closeModal, openModal } = useModal();
  const { isLoggedIn } = useAuth();
  const favorite = useFavoriteTeachers(db);
  const user = useSelector(selectUser);

  const handleClickModal = (id) => {
    const teacherDetails = teachers.find((teacher) => teacher.id === id);
    setTeacher(teacherDetails);
    openModal("BookTrialLesson");

    setVisibility({ ...visibility, [id]: false });
  };

  const deleteFavorite = (id) => {
    const favRef = ref(db, `/favorite/${auth.currentUser.uid}/${id}`);
    return remove(favRef);
  };

  const addFavorite = (id) => {
    const favoriteTeacher = teachers.find((teacher) => teacher.id === id);
    const userRef = ref(db, `/favorite/${auth.currentUser.uid}/${id}`);

    set(userRef, favoriteTeacher);
  };

  const handleClick = (id) => {
    if (!isLoggedIn) {
      return openModal("NotAuth");
    }

    const isFavorite = favorite.find((teachers) => teachers.id === id);

    if (isFavorite) {
      return deleteFavorite(id);
    } else {
      return addFavorite(id);
    }
  };

  return (
    <>
      <TeachersList>
        {teachers.map(
          (
            {
              name,
              surname,
              languages,
              levels,
              rating,
              reviews,
              price_per_hour,
              lessons_done,
              avatar_url,
              lesson_info,
              conditions,
              experience,
              id,
            },
            index
          ) => {
            return (
              <TeacherItem key={id}>
                <WrapperAvatar>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      src={avatar_url}
                      alt={surname}
                      width="96"
                      height="96"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </StyledBadge>
                </WrapperAvatar>
                <Wrapper>
                  <TeacherInfo
                    lessons_done={lessons_done}
                    rating={rating}
                    price_per_hour={price_per_hour}
                    id={id}
                    name={name}
                    surname={surname}
                    languages={languages}
                    lesson_info={lesson_info}
                    conditions={conditions}
                    favorite={isLoggedIn ? favorite : null}
                    handleClick={handleClick}
                    user={user}
                  />
                
                {!visibility[id] && (
                  <ReadMoreButton
                    type="button"
                    onClick={() => setVisibility({ ...visibility, [id]: true })}
                  >
                    Read more
                  </ReadMoreButton>
                )}
                {visibility[id] && (
                  <ReadMoreMarkup experience={experience} reviews={reviews} />
                )}
                <LevelsList>
                  {levels.map((levels, index) => (
                    <LevelsItem key={index}>
                      <p>{levels}</p>
                    </LevelsItem>
                  ))}
                </LevelsList>
                {visibility[id] && (
                  <BookLessonButton
                    type="button"
                    onClick={() => handleClickModal(id)}
                  >
                    Book trial lesson
                  </BookLessonButton>
                )}</Wrapper>
              </TeacherItem>
            );
          }
        )}
      </TeachersList>
      {modalState.name === "BookTrialLesson" && (
        <Modal
          modalState={modalState}
          onSubmit={closeModal}
          closeModal={closeModal}
        >
          <BookTrialLesson teacher={teacher} onSubmit={closeModal} />
        </Modal>
      )}
      {modalState.name === "NotAuth" && (
        <Modal closeModal={closeModal} modalState={modalState}>
          <NotAuth />
        </Modal>
      )}
    </>
  );
};
