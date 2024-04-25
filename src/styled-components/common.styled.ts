import styled from "styled-components";
import { scaleFont, scaleValue } from "../utils";
import { COLORS } from "../Constants";

export const HeroSectionStyled = styled.section`
  height: 100vh;
  width: 100%;
  background: url("../src/assets/icons/herobg.jpg");
  background-size: cover;
  position: relative;
  display: flex;
  /* flex-direction; */
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    padding-left: 160px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.4);
    z-index: 0;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 64px;
      line-height: 56px;
      font-weight: 700;
      color: ${COLORS.LightDark};
    }
    .description {
      font-size: 25px;
      color: ${COLORS.LightDark};
      margin-top: 15px;
    }
    .description .typewriter {
      color: ${COLORS.Blue};
      letter-spacing: 1px;
      font-weight: 500;
    }
    .social-links {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
      .social-link {
        font-size: 24px;
        color: ${COLORS.LightDark};
        transition: 0.4s;
        line-height: 1;
        &:hover {
          color: ${COLORS.Blue};
        }
      }
    }
  }
`;

export const MainSectionStyled = styled.main`
@media screen and (min-width:992px) {
  margin-left: 160px;
  margin-right: 160px;
  
}

  .section {
    &#about-me:hover {
      .section-title::after {
        left: unset;
        right: 0;
      }
    }
    &-title {
      text-transform: uppercase;
      line-height: 56px;
      font-weight: 700;
      color: rgb(69, 80, 91);
      text-align: center;
      padding-bottom: 16px;
      position: relative;
      margin-bottom: 16px;
      &::before {
        position: absolute;
        content: "";
        left: calc(50% - 75px);
        bottom: 0;
        height: 2px;
        width: 150px;
        background: ${COLORS.Primary};
      }
      &::after {
        content: "";
        position: absolute;
        left: calc(50% - 25px);
        transition: 0.2s;
        bottom: 0;
        height: 3px;
        background-color: ${COLORS.Blue};
        width: 50px;
      }
    }
    &-wrapper {
      margin-block: 60px;
    }
    &-head {
      padding-bottom: 30px;
      text-align: center;
    }
    &-body {
      .position {
        color: ${COLORS.LightBlue};
        margin-bottom: 0.5rem;
      }

      &-content{
        .progress{
          &-skill-name{
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

          }
          &-bar{
            
            width: 100%;
            background:${COLORS.LightGray};
            &-status{
              background:${COLORS.Blue};
              height: 10px;
            }
            &-wrap{

            }
          }
        }
      }
    }
  }
`;

export const WorkSectionStyled = styled.div`
  .section-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .project {
    &-img {
      height: 220px;
      width: 320px;
      overflow: hidden;
      position: relative;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: 0.4s;
      }
    }
    &-card {
      &-wrapper {
        margin-bottom: 30px;
        margin-inline: 24px;
        &:hover {
          .project-img {
            img {
              transform: scale(1.09);
            }
          }
          .project-card-overlay {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background: ${COLORS.Blue};
            opacity: 0.9;
            transition: opacity 0.3s;
            z-index: 9;
          }
          .project-card-content {
            opacity: 1;
            color: ${COLORS.White};
          }
        }
      }
      &-overlay {
        opacity: 0;
      }
      &-content {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 12px;
      }
    }
    &-category{
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
  `;
  export const ContactMeStyled = styled.div`
  `