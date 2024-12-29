import styled from "styled-components";

export const TeachersList = styled.ul`
  max-width: 1184px;
  margin: 0 auto;
`;

export const TeacherItem = styled.li`
  border-radius: 24px;
  padding: 24px;
  background-color: #fff;

  display: flex;
  gap: 48px;
  align-items: flex-start;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const WrapperAvatar = styled.div`
  border-radius: 100px;
  border: 3px solid #fbe9ba;
  padding: 12px;
  background: #fff;
  overflow: hidden;
  width: 120px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 769px) {
    width: calc(100% - 120px);
  }
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const LevelsItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  background-color: transparent;
  border: 1px solid rgba(18, 20, 23, 0.2);

  &:first-child {
    background: #f4c550;
    border: 1px solid transparent;
  }

  & p {
    color: var(--main-text-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
  }
`;

export const BookLessonButton = styled.button`
 cursor: pointer;
  margin-top: 32px;
  color: var(--main-text-color);
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  border: none;
  padding: 16px 48px;
  border-radius: 12px;
  background-color: #f4c550;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: #ffdc86;
`;

export const ReadMoreButton = styled.button`
  cursor: pointer;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  text-decoration-line: underline;
  margin-top: 16px;
  margin-bottom: 32px;
  transition: color var(--transition);
  padding: 0px;

  &:hover,
  :focus {
    color: var(--button-color);
  }
`;
