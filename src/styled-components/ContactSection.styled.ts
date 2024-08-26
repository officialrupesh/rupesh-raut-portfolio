import styled from "styled-components";

export const ContactSectionStyled = styled.section`
  background: radial-gradient(circle, #070086 0%, #050069 40%, #02004b 100%);
  padding-block: 60px;
  color: #ffffff;
  img {
    object-fit: contain;
  }
  .form-wrapper {
    background: url("/../../src/assets/icons/form-bg.png") no-repeat;
    padding: 30px;
    background-size: cover;
  }

  .form {
    &-item {
      margin-bottom: 14px;
      label {
        p {
          margin-bottom: 12px;
        }
      }
      input,
      textarea {
        min-height: 50px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.1);
        border-radius: 7px;
        outline: none;
        font-size: 1rem;
        color: #ffffff;
        padding-inline: 20px;
      }
      textarea {
        padding-block: 10px;
      }
    }
  }
`;
