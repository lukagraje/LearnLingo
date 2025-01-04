import styled from "styled-components";

export const Header = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "isSticky",
})`
  padding-inline: 64px;
  padding-block: 20px 8px;
  background-color: white;
  top: 0;
  z-index: 2;
  position: ${(props) => (props.isSticky ? "sticky" : "relative")};
  box-shadow: ${(props) =>
    props.isSticky ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 769px) {
  padding-block: 20px 15px}
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 14px;
`;

export const TitleLogo = styled.p`
  color: var(--main-text-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const AppHeader = ({ isSticky, children }) => {
  return <Header isSticky={isSticky}>{children}</Header>;
};
