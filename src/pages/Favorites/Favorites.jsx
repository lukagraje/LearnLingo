import React from "react";

import { useState } from "react";
import { useFavoriteTeachers } from "../../hooks/useFavorite";
import { TeachersMarkup } from "../../components/TeachersMarkup/TeachersMarkup";
import { db } from "../../assets/FirebaseConfig/FirebaseConfig";
import { Button, TeachersSection } from "../Teachers/Teachers.styled";
import { Title } from "./Favorites.styled";
import { Container } from "../../main";
import { TeacherPageWrapper } from "../Teachers/Teachers.styled";

const FAVORITE_TEACHERS_PER_PAGE = 4;

const FavoriteTeachers = () => {
  const favorite = useFavoriteTeachers(db);

  const [count, setCount] = useState(FAVORITE_TEACHERS_PER_PAGE);

  const handleClickMoreButtonFavorite = () => {
    if (count >= favorite.length) return;
    setCount((prevCount) => prevCount + FAVORITE_TEACHERS_PER_PAGE);
  };

  const limitedFavoriteTeachers = favorite.slice(0, count);

  return (
    <TeachersSection>
      <Container>
        <TeacherPageWrapper>
          {favorite.length > 0 ? (
        <div>
          <TeachersMarkup teachers={limitedFavoriteTeachers} />
          {count < favorite.length && (
              <Button type="button" onClick={handleClickMoreButtonFavorite}>
                More
              </Button>
            )}
        </div>
      ) : (
        <Title>You haven't added teachers to your favorites yet.</Title>
      )}
      </TeacherPageWrapper>

      </Container>
      
    </TeachersSection>
  );
};

export default FavoriteTeachers;
