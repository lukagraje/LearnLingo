import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding-block: 24px 16px;
  position: relative;
`;

export const LabelTitle = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  margin-block: 10px 4px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  color: #000;
  background-color: transparent;
  transition: color var(--transition);

  position: absolute;
  bottom: 5px;
  
  transform: translate(0, -15px);

  &:hover,
  :focus {
    color: var(--button-color);
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;
