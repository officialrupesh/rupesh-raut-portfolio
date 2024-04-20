import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/montserrat";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
body{
      font-family: 'Montserrat Variable', sans-serif;
}
`;

export default GlobalStyles