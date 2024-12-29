import styled from "styled-components";

export const Section = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 24px;

  max-height: 650px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fbe9ba;
    border-radius: 15px;
  }
  @media screen and (min-width: 500px) {
    width: 600px;
    padding: 64px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: var(--main-text-color);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`;

export const WrapperTeacher = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  border-radius: 100px;
`;
export const TeacherTitle = styled.p`
  color: var(--gray-text-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 4px;
`;

export const TeacherName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;