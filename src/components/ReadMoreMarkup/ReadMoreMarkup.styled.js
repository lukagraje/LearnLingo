import styled from "styled-components";

export const ExperienceParagraph = styled.p`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  margin-top: 16px;
  margin-bottom: 28px;
`;

export const ReviewsList = styled.ul`
  margin-bottom: 32px;
`;

export const ReviewsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 6px;
`;

export const ReviewName = styled.p`
  color: var(--gray-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ReviewRating = styled.p`
  color: var(--main-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  display: flex;
  align-items: center;

  & span {
    display: flex;
    color: #ffc531;
    margin-right: 8px;
  }
`;