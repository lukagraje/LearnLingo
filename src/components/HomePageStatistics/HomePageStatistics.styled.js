import styled from "styled-components";

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  row-gap: 10px;
  
  border-radius: 30px;
  border: 2px dashed #f4c550;
  padding: 30px 0px;
  margin-block: 28px;

  @media screen and (min-width: 1200px) {
  column-gap: 0px;}
`;

export const Stats = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;
  flex: 1 1 calc(25% - 20px);

  @media screen and (max-width: 1200px) {
    flex: 1 1 calc(50% - 20px); /* Dwa elementy w rzędzie między 768px a 1200px */
  }

  @media screen and (max-width: 768px) {
    flex: 1 1 100%; /* Pojedyncze elementy w kolumnie poniżej 768px */
  }

  @media screen and (min-width: 1200px) {
    column-gap: 0px;
    justify-content: center;
  }
`;

export const Number = styled.p`
  color: var(--main-text-color);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.56px;
flex: 0 0 auto;
padding: 10px;


@media screen and (max-width: 1200px) {
width: 150px}
`;

export const ReviewsTitle = styled.p`
  color: #121417b2;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  max-width: 96px;
  text-align: left;
  flex: 0 0 auto;

padding: 10px;

`;
