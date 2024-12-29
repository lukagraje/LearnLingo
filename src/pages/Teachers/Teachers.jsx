import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTeachers } from "../../redux/teachers/teachersSelectors";
import { useState } from "react";
import { TeachersMarkup } from "../../components/TeachersMarkup/TeachersMarkup";
import { FiltersBar } from "../../components/FiltersBar/FiltersBar";
import { Button, TeacherPageWrapper, TeachersSection } from "./Teachers.styled";
import { Container } from "../../main";

const TEACHERS_PER_PAGE = 4;

const TeachersPage = () => {
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const [count, setCount] = useState(TEACHERS_PER_PAGE);

  const handleClickMoreButton = () => {
    if (count >= filteredTeachers.length) return;
    setCount((prevCount) => prevCount + TEACHERS_PER_PAGE);
    console.log(`"Count:" ${count}`);
    console.log(`"filteredTeachers length: ${filteredTeachers.length}`);
  };

  const limitedTeachers = filteredTeachers.slice(0, count);

  return (
    <TeachersSection>
      <Container>
        <TeacherPageWrapper>
          <FiltersBar />
          <div>
            {filteredTeachers.length > 0 ? (
              <div>
                <TeachersMarkup teachers={limitedTeachers} />
                {count < filteredTeachers.length && (
                  <Button type="button" onClick={handleClickMoreButton}>
                    More
                  </Button>
                )}
              </div>
            ) : (
              <p>No teachers found for the selected filters.</p>
            )}
          </div>
        </TeacherPageWrapper>
      </Container>
    </TeachersSection>
  );
};

export default TeachersPage;
