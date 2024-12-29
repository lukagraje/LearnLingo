import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { GoBook } from "react-icons/go";

export const LessonsBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 20px;

  @media screen and (min-width: 769px) {
    padding-block: 6px;
  }
`;

export const Language = styled.p`
  color: var(--gray-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const LessonsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: relative;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media screen and (max-widht: 1025px) {
    gap: 4px;
  }
`;

export const LessonsListItem = styled.li`
  display: flex;
  &:nth-child(6) {
    margin-left: 60px;
  }
`;

export const Separator = styled.span`
  display: none;

  @media screen and (min-width: 1025px) {
    display: inline;
    color: #12141733;
    padding-inline: 11.5px;
  }
`;

export const LessonsDetails = styled.p`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  position: relative;
  display: inline;

  .price {
    color: #38cd3e;
  }
`;

export const StyledStar = styled(FaStar)`
  color: #ffc531;
  margin-right: 5px;
`;

export const StyledBook = styled(GoBook)`
  margin-right: 5px;
  position: absolute;
  left: -21%;
  top: 17%;
`;

export const TeacherName = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 32px;
`;

export const TeacherDetails = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const TeacherDetailsTitle = styled.h2`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1;

  span {
    color: var(--gray-text-color);
  }

  .languages {
    color: var(--main-text-color);
    text-decoration-line: underline;
  }
`;

export const FavoriteButton = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #000;
  transition: color var(--transition);

  & svg {
    width: 26px;
    height: 26px;
  }

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;
