import { useNavigate } from "react-router-dom";
import { HomePageStatistics } from "../../components/HomePageStatistics/HomePageStatistics";
import { Container } from "../../main";
import {
  Section,
  WrapperImage,
  GirlImg,
  MacImg,
  Title,
  Description,
  Button,
  Wrapper,
  WrapperAbout,
} from "./Home.styled";
import girl from "../../Images/girl.png";
import mac from "../../Images/macimg.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Wrapper>
          <WrapperAbout>
            <Title>
              Unlock your potential with the best <span>language</span> tutors
            </Title>
            <Description>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Description>
            <Button type="button" onClick={() => navigate("teachers")}>
              Get started
            </Button>
          </WrapperAbout>
          <WrapperImage>
            <GirlImg src={girl} alt="girl" width="339" />
            <MacImg src={mac} alt="mac" width="391" />
          </WrapperImage>
        </Wrapper>
        <HomePageStatistics />
      </Section>
    </Container>
  );
};

export default HomePage;
