import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/montserrat";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
p,h1,h2,h3,h4,h5,h6{
    padding: 0;
    margin: 0;
}
body{
      font-family: 'Montserrat Variable', sans-serif;
}
`;

export default GlobalStyles