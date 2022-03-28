import styled from "styled-components";

type PropsTooltip = {
  status: boolean;
};

export const Container = styled.div(
  ({ status }: PropsTooltip) => `
.tooltip {
    position: absolute;
    margin-top: -1.5rem;
    left: 87.5rem;
    &__item {
      position: relative;
      margin-right: -13rem;
      min-width: 100px;
      padding: 20px;
      visibility: hidden;
      opacity: 0;
      background: white;
      transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
      color: ${status ? "red" : "#484848"};
      border: 1px solid #cecece;
      border-radius: 3px;
      font-weight: 500;
      box-shadow: 0 2px 1px #bcbcbc;
      z-index: 4;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
      }
    }

    &__initiator {
      cursor: pointer;
      z-index: 5;
    }

    &[data-direction="left"] {
      .tooltip__initiator:hover ~ .tooltip__item {
        transform: translate3d(0, -50%, 0);
        visibility: visible;
        opacity: 1;
      }

      .tooltip__item {
        top: 45%;
        right: calc(100% + 1em);
        transform: translate3d(15px, -50%, 0);

        &:after {
          top: 50%;
          right: -0.5em;
          transform: translate3d(0, -50%, 0);
          border-width: 0.5em 0 0.5em 0.5em;
          border-color: transparent transparent transparent white;
          -webkit-filter: drop-shadow(1px 2px 1px #bcbcbc);
          filter: drop-shadow(1px 2px 1px #bcbcbc);
        }
      }
    }
    
    &[data-direction="bottom"] {
      .tooltip__initiator:hover ~ .tooltip__item {
        transform: translate3d(-50%, 0, 0);
        visibility: visible;
        opacity: 1;
      }

      .tooltip__item {
        top: calc(100% + 1em);
        left: 50%;
        transform: translate3d(-50%, -15px, 0);

        &:after {
          top: -0.5em;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          border-width: 0 0.5em 0.5em 0.5em;
          border-color: transparent transparent white
          }; transparent;
          -webkit-filter: drop-shadow(1px 2px 1px #bcbcbc);
          filter: drop-shadow(1px -1px 1px #bcbcbc);
        }
      }
    }
  }

  .fa.fa-info-circle {
    font-size: 38px;
    color: #21606b;
  }

  // STYLES FOR CODEOPEN
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    background: #dadada;
    font-family: "Roboto", sans-serif;
  }
  main {
    flex: 1 1 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`
);
