import styled from "styled-components";
import { scaleValue } from "../utils";
import { COLORS } from "../Constants";

export const HeroSectionStyled = styled.section`
  height: 100vh;
  width: 100%;
  background: url("https://sumitmaharjan.com.np/assets/img/hero-bg.jpg");
  background-size:cover;
  position: relative;
  display: flex;
  /* flex-direction; */
  justify-content: center;
  flex-direction: column;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width:100%;
    background: rgba(255, 255 ,255 ,0.4);
    z-index: 0;

  }
  .content{
    position: relative;
    h1{
        font-size: ${scaleValue(64)};
        line-height: ${scaleValue(56)};
        font-weight: 700;
        color: ${COLORS.LightDark};
    }
  }
`;