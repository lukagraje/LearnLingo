import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { iconTool } from "../IconTool/IconTool";
import {
  AppHeader,
  Header,
  HeaderWrapper,
  TitleLogo,
  WrapperLogo,
} from "./AppBar.styled";
import { Container } from "../../main";
import { useLocation } from "react-router-dom";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const isSticky =
    location.pathname === "/teachers" || location.pathname === "/favorites";

  return (
    <AppHeader isSticky={isSticky}>
      <Container>
        <HeaderWrapper>
          <WrapperLogo>
            <div>{iconTool.addPolishFlag}</div>
            <TitleLogo>LearnLingo</TitleLogo>
          </WrapperLogo>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderWrapper>
      </Container>
    </AppHeader>
  );
};
