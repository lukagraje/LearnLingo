import styled from "styled-components";

export const Section = styled.div`
padding-block: 15px 32px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 1000px) {
    flex-wrap: nowrap;    
  }
`;


export const Title = styled.h1`
  max-width: 548px;
  font-weight: 500;
  color: var(--main-text-color);
  font-size: calc(28px + (48 - 28) * ((100vw - 320px) / (1440 - 320)));
  line-height: 1.12;
  letter-spacing: -0.96px;
  margin-bottom: 32px;

  & span {
    font-weight: 400;
    border-radius: 8px;
    background: #fbe9ba;
    display: inline-block;
    font-style: italic;
  }

   @media (min-width: 768px) {
    font-size: calc(36px + (48 - 36) * ((100vw - 768px) / (1440 - 768)));
    line-height: 1.14;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
    line-height: 1.16;
  
  }
`;

export const Description = styled.p`
  font-weight: 400;
  width: calc(200px + (471 - 200) * ((100vw - 390px) / (1440 - 390)));
  max-width: 100%;
  color: var(--main-text-color);
  font-size: 16px;
  line-height: 1.34;
  letter-spacing: -0.32px;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    line-height: 1.36;
  }

  @media (min-width: 1200px) {
    line-height: 1.37;
  }
`;


export const WrapperAbout = styled.div`
  max-width: calc(500px + (720 - 500) * ((100vw - 390px) / (1440 - 390)));
  height: 530px;
  padding: calc(15px + (64 - 15) * ((100vw - 390px) / (1440 - 390)));
  border-radius: 30px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 768px) {
    max-width: 960px; 
  }

  @media (min-width: 1200px) {
    max-width: 1120px; 
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 568px;
  max-width: 100%;
  height: 530px;
  border-radius: 30px;
  background: #fbe9ba;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const GirlImg = styled.img`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -55%);
`

export const MacImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translatex(-50%);
`;

export const Button = styled.button`
cursor: pointer;
border: none;
max-width: 267px;
font-size: 18px;
font-weight: 700;
line-height: 1.55;
transition: background-color var(--transition);
padding: 16px 88px;
border-radius: 12px;
background-color: var(--button-color);

&:hover,
:focus {
background-color: var(--button-active-color)}
`
