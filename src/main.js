import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

import RobotoBlack from "./assets/Fonts/Roboto-Black.ttf";
import RobotoMedium from "./assets/Fonts/Roboto-Medium.ttf";
import RobotoBold from "./assets/Fonts/Roboto-Bold.ttf";
import RobotoRegular from "./assets/Fonts/Roboto-Regular.ttf";

export const GlobalStyle = createGlobalStyle`


:root{
--main-text-color:#121417;
--gray-text-color:#8A8A89;
--transition: 250ms ease-in-out;
--button-color:#f4c550;
--button-active-color: #FFDC86;
}


@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Regular'),
         url(${RobotoRegular}) format('truetype');
    font-weight: 400; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Medium'),
         url(${RobotoMedium}) format('truetype');
    font-weight: 500; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Bold'),
         url(${RobotoBold}) format('truetype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'RobotoBlack';
    src: local('Roboto'), local('Roboto-Black'),
         url(${RobotoBlack}) format('truetype');
    font-weight: 900; 
    font-style: normal;
    font-display: swap;
  }



h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  
}

body {
  margin: 0;  
  font-family: "Roboto", sans-serif;
  font-weight: 500;


}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const Container = styled.div`
  max-width: 345px;
  padding: 0 14px;
  margin: 0 auto;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 760px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1025px) {
    max-width: 1440px;
    padding: 0 64px;
  }
`;
