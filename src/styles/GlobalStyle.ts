import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  body{
    background-image: url(src/assets/sashimi-meal-with-lettuce-and-tea-4quft3rkrl9jrhhg.jpg);
  }
`
export const colors = {
  primary: "#ff2400",
  secondary: "#ff2400",
  secondaryLight: "#ff2400",
  third: "#ff2400",
  thirdLight: "	#ff6961",
  black: "#000",
  white: "#fff"
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
`