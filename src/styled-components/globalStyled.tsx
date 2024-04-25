import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/montserrat";
import { COLORS } from "../Constants";

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
.react-horizontal-scrolling-menu- {
    
        &-wrapper {
          position: relative;
          .project-card-scroll{
        scrollbar-width: none;
    }
        }
        &-arrow-left {
          position: absolute;
          left: 0;
          height: 100%;
          width: 40px;
          top: 0;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            opacity: 1;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            background: ${COLORS.Blue};
            border-radius: 50%;
            color: rgb(255, 255, 255);
            min-width: 40px !important;
            transition: 0.3s ease-in;
          }
        }
        &-arrow-right {
          position: absolute;
          right: 0;
          height: 100%;
          width: 40px;
          top: 0;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            opacity: 1;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            background:${COLORS.Blue};
            border-radius: 50%;
            color: rgb(255, 255, 255);
            min-width: 40px !important;
            transition: 0.3s ease-in;
          }
        }
      }
`;

export default GlobalStyles