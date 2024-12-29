import styled from "styled-components";

export const Header = styled.header`
padding-inline: 64px;
padding-block: 20px 15px;`




export const WrapperLogo = styled.div`
display: flex;
align-items: center;
gap: 8px;
`

export const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
row-gap: 20px;`

export const TitleLogo = styled.p`
  color: var(--main-text-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;