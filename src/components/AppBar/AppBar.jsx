import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { iconTool } from "../IconTool/IconTool";
import { Header, HeaderWrapper, TitleLogo, WrapperLogo } from "./AppBar.styled";
import { Container } from "../../main";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
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
    </Header>
  );
};
