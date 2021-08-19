import { createGlobalStyle } from "styled-components";

// https://coolors.co/044389-e0fbfc-ee6c4d-f0c808-5995ed
export const theme = {
  colors: {
    blue: "#044389",
    lightBlue: "#5995ED",
    orange: "#044389",
    yellow: "#F0C808",
    offWhite: "#E0FBFC",
  },
};

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: lato, sans-serif;
  font-size: large
}

h1, h2, h3, h4, h5 {
  font-family: futura-pt, sans-serif;
}

h1 {
    font-weight: 600;
}

h2 {
    font-weight: 500;
}

h3, h4, h5 {
    font-weight: 400;
}

a {
  color: ${theme.colors.lightBlue};
  text-decoration: none;
}


* {
  box-sizing: border-box;
}

`;
