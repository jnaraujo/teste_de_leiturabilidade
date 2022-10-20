import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  background-color: transparent;

  width: 100%;
  height: fit-content;

  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  padding: 8px 0;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.onBackground};

  .group {
    display: flex;

    align-items: center;

    padding: 0 16px;

    height: 30px;

    gap: 8px;

    &:not(:first-child) {
      border-left: 1px solid ${(props) => props.theme.colors.onBackground};
    }
  }
  .control {
    display: none;
  }
  @media (max-width: 720px) {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    justify-content: left;

    width: 100vw;

    /* padding: 8px 32px; */

    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.31);

    overflow-x: scroll;

    /* flex-wrap: wrap; */
    border: none;

    margin-bottom: 0;

    .group {
      gap: 12px;
      height: 20px;
      padding: 8px 24px;
    }
  }

  .editButton {
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    color: ${(props) => props.theme.colors.onBackground};

    padding: 0 8px;
    cursor: pointer;

    border-radius: 8px;

    transition: color 0.2s ease-in-out;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  .editButton:hover {
    color: #adb5bd;
  }
`;
