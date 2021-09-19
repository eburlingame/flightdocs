import { createGlobalStyle } from 'styled-components'

// https://coolors.co/044389-e0fbfc-ee6c4d-f0c808-5995ed
export const theme = {
    colors: {
        blue: '#044389',
        lightBlue: '#5995ED',
        orange: '#EE6C4D',
        yellow: '#F0C808',
        offWhite: '#E0FBFC',
    },
}

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
    font-weight: 500;
}

a {
  color: ${theme.colors.lightBlue};
  text-decoration: none;
}

blockquote {
  font-weight: 600;
  font-size 1.15em;
}

* {
  box-sizing: border-box;
}
ul {
  padding-left: 2em;
}

table { 
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border-collapse: collapse;
}

thead > tr > th {
  border-bottom: 0.5px solid #ddd;
}

th {
  text-align: left;
  padding: 0.25em;
}

tr {
  transition: 0.1s background-color;

  :hover {
    transition: 0.1s background-color;
    background-color: #efefef;
  }
}

td {
  vertical-align: middle;
  padding: 0.5em;
}


`
