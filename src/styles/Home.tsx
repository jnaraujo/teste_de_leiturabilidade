import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Inter", sans-serif;

  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;

  .aweHidden {
    opacity: 0;
  }
  .hideAndNone {
    display: none;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 50px;
      height: 50px;
      animation: loading 1s linear infinite;
      fill: white;
    }
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1050px;
`;

export const TopBar = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.onSecondary};
  font-family: "Inter", sans-serif;

  p {
    font-size: 16px;
    margin: 0;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.onBackground};
    font-weight: 400;

    span {
      font-weight: 600;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    // margin-top: 30px;
    p {
      /* width: 600px; */
      font-size: 20px;
    }
  }
`;

export const Container = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;

  .line {
    border-top: 1px solid ${({ theme }) => theme.colors.onSurfaceSecondary};
  }

  &.left {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 32px;
    }
  }

  .textarea {
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    width: 99% !important;
    min-height: 70vh;
  }
`;

export const RdResult = styled(Grid)`
  font-family: "Inter", sans-serif;
  // width: 90vw;

  // padding: 10px 10px;

  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
    span {
      font-weight: bold;
    }
  }

  ul {
    margin-top: 5px;

    span {
      font-weight: bold;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0;

    li {
      font-size: 15px;
      list-style: none;
      display: inline;
    }
    li:nth-child(1) {
      left: 0px;
    }
    li:nth-child(3) {
      float: right;
    }
  }

  .ease_bar {
    position: relative;
    width: 100%;
    box-shadow: 0px 0px 15px -5px #d4d4d4;
    border-radius: 50px;
    .cont {
      padding-left: 5px !important;
      padding-right: 5px !important;
    }
    .slider {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.onBackground};
      width: 8px;
      height: 30px;
      margin-top: -5px;
      border-radius: 20px;

      padding: 0;
      .row {
        padding: 0;
        margin: 0;
      }
    }
    .row {
      margin: 8px 0;
      display: flex;
      flex-direction: col;
      .col {
        width: 100%;
      }
    }
    .row .col {
      height: 20px;
    }
    .row .col:nth-child(1) {
      border-radius: 50px 0 0 50px;
      background-color: #bd2323;
    }
    .row .col:nth-child(2) {
      background-color: #e56d6d;
    }
    .row .col:nth-child(3) {
      background-color: #fff4f4;
    }
    .row .col:nth-child(4) {
      background-color: #c3ffcd;
    }
    .row .col:nth-child(5) {
      background-color: #97fba7;
      border-radius: 0 50px 50px 0;
    }
  }
  .importExternalPage {
    border: 2px dashed ${({ theme }) => theme.colors.onBackground};
    border-radius: 10px;
    padding: 10px;
    h3 {
      font-size: 18px;
      font-weight: 700;
      padding: 0;
      margin: 0;
    }
    p {
      margin-top: 4px;
      font-size: 16px;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      padding-left: 4px;
      width: calc(100% - 4px);
      height: 30px;
      margin-top: 8px;
    }
    button {
      width: 100%;

      margin-top: 8px;

      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      padding: 10px 10px;

      height: 40px;
      border-radius: 5px;

      color: ${({ theme }) => theme.colors.background};

      border: none;

      transition: background 0.3s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.onPrimary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    position: relative;
  }
`;

export const Informations = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .texts {
    font-family: "Inter", sans-serif;
    padding-top: 40px;
    padding-bottom: 30px;
    h2 {
      font-weight: 600;
      font-size: 25px;
      color: ${({ theme }) => theme.colors.onBackground};

      margin: 8px 0;
      padding: 0;
    }
    h3 {
      margin-top: 30px;
      font-weight: 400;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.onBackground};
    }
    p {
      margin: 0;
      padding: 0;

      font-size: 16px;
      line-height: 1.75;
      a {
        color: ${({ theme }) => theme.colors.semantic.link};
      }
    }
    ul {
      padding: 0;
      li {
        padding-bottom: 10px;
        word-wrap: break-word;
        list-style: none;
        a {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.semantic.link};
        }
      }
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      h2 {
        font-size: 30px;
        margin-top: 32px;
      }
      h2:nth-child(1) {
        margin-top: 10px;
      }
      h3 {
        margin-top: 40px;
        font-weight: 400;
        font-size: 20px;
      }
      p {
        font-size: 18px;
        margin-bottom: 8px;
        line-height: 1.75;
      }
      ul {
        padding: 0;
        li {
          padding-bottom: 10px;
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const Footer = styled(Grid)`
  font-family: "Inter", sans-serif;
  text-align: center;
  padding: 20px;
  font-size: 15px;
  a {
    text-decoration: none;
  }
`;

export const ModalDiv = styled.div`
  padding: 16px 8px;
  max-width: 500px;
  .message {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    h1 {
      margin-top: 16px;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 32px;
      }
    }
    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 24px;
      img {
        width: calc(100% - 16px);
        height: auto;
        border: 2px dashed ${({ theme }) => theme.colors.primary};
        margin-top: 16px;
        padding: 8px;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 20px;
      }
    }
  }
  .line {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    margin: 16px 0;
  }
  .button {
    font-family: "Montserrat", sans-serif;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    button {
      width: 100%;
      &:not(:only-child) {
        width: 45%;
      }
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      padding: 10px 10px;

      height: 40px;
      border-radius: 5px;

      color: ${({ theme }) => theme.colors.onPrimary};

      border: none;

      transition: background 0.3s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child {
        background-color: ${({ theme }) => theme.colors.semantic.error};
        color: ${({ theme }) => theme.colors.onSurface};
        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.semantic.error};
          color: ${({ theme }) => theme.colors.semantic.error};
          background-color: ${({ theme }) => theme.colors.onPrimary};
        }
      }
      &:last-child {
        background-color: ${({ theme }) => theme.colors.onPrimary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.onPrimary};
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
