import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background: #f4c550;
  text-align: center;
  display: block;
  margin: 64px auto 0;
  padding: 16px;
  width: 183px;
  border: none;
  color: #121417;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
`;

export const TeachersSection = styled.section`
  background-color: #f8f8f8;
  min-height: calc(100vh - 83px);
  padding-block: 38px 62px;  
`;

export const TeacherPageWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

@media screen and (min-width: 1025px) {
padding-inline: 64px;
}

`