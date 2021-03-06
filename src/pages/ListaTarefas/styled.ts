import styled from "styled-components";

type Props = {
  checked: boolean;
};

export const Container = styled.div(
  ({ checked }: Props) => `

 background-color: #262833;
  color: #797a81;
  min-height: 100vh;

  .buttonDeleteTodas {
    width: 12.8rem;
    height: 2.4rem;
    color: #fff;
    background: #630003;
    border: none;
    border-radius: 5px;
    padding: 10px;
    display: ${checked ? "flex" : "none"};
    align-items: center;
    top: 1.2rem;
    margin: -3.7rem 6.3rem;
    margin-bottom: 1.3rem;
    font-weight: 600;
    font-size: 18px;
    transition: filtro 0.2s;
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`
);

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;

  button {
    height: 30px;
    width: 60px;
    position: relative;
  }

  .react-button-voltar {
    width: 3rem;
    position: relative;
    right: 22rem;
    top: 0.5rem;
    border: none;
    background: transparent;

    transition: filtro 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;

type PropsButtonsGrid = {
  checked: boolean;
};

export const DivDelete = styled.div(
  ({ checked }: PropsButtonsGrid) => `
   height: 30px;
  width: 60px;
  margin-top: 0.2rem;
  position: absolute;
  left: 68%;


  .button{
    color: white;
      background: "#CCC ";
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
  
      transition: filter 0.2s;

      &:hover {
        cursor: ${checked ? "pointer" : "auto"};
        filter: ${checked ? "brightness(0.9)" : "none"};
      }
    background: ${checked ? "red" : "#ccc"};
  }

  .buttonDeleteNone{
    background: #ccc;
  }
`
);

type PropsButtonsGridEdit = {
  checked: boolean;
  status: boolean;
};

export const DivEditar = styled.div(
  ({ checked, status }: PropsButtonsGridEdit) => `
   height: 30px;
  width: 60px;
  margin-top: 0.2rem;
  position: absolute;
  left: 64%;


  .button{
      color: white;
      background: "#CCC ";
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
  
      transition: filter 0.2s;

      &:hover {
        cursor: ${status ? "auto" : checked ? "pointer" : "auto"};
        filter: ${status ? "auto" : checked ? "brightness(0.9)" : "none"};
      }
    background: ${status ? "#CCC" : checked ? "orange" : "#CCC"};
  }

  .buttonDeleteNone{
    background: #ccc;
  }
`
);

type PropsButtonsGridDelete = {
  checked: boolean;
  status: boolean;
};

export const DivFinalizar = styled.div(
  ({ checked, status }: PropsButtonsGridDelete) => `
   height: 30px;
  width: 60px;
  margin-top: 0.2rem;
  position: absolute;
  left: 58.7%;


  .button{
      color: white;
      background: "#CCC ";
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
  
      transition: filter 0.2s;

      &:hover {
        cursor: ${status ? "auto" : checked ? "pointer" : "auto"};
        filter: ${status ? "auto" : checked ? "brightness(0.9)" : "none"};
      }
    background: ${status ? "#CCC" : checked ? "yellow" : "#ccc"};
  }

  .buttonDeleteNone{
    background: #ccc;
  }
`
);

export const ButtonNavigation = styled.button`
  color: white;
  background: #ccc;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1.3rem;
  margin-top: auto;
  font-weight: 400;
  margin-left: 10rem;
  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const ContainerInfoDelete = styled.div``;

export const ContainerInputEdit = styled.div``;

export const ContainerInputFinalizar = styled.div``;

export const ContainerInputMaxTarefas = styled.div``;

export const InputEdit = styled.input`
  width: 93%;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  flex: 1;
  outline: none;
`;

export const IconStatusTarefa = styled.div`
  height: 30px;
  width: 60px;
  margin-top: 0.4rem;
  position: absolute;
  left: 73%;

  .gg-close-o {
    box-sizing: border-box;
    position: absolute;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 40px;
  }

  .gg-close-o::after,
  .gg-close-o::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 3px;
  }

  .gg-close-o::after {
    transform: rotate(-45deg);
  }

  @keyframes spinner-two {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .gg-spinner-two {
    transform: scale(var(--ggs, 1));
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
  }

  .gg-spinner-two::after,
  .gg-spinner-two::before {
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 20px;
    content: "";
    position: absolute;
    border-radius: 100px;
  }

  .gg-spinner-two::before {
    animation: spinner-two 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    border: 3px solid transparent;
    border-bottom-color: currentColor;
    border-top-color: currentColor;
  }

  .gg-spinner-two::after {
    border: 3px solid;
    opacity: 0.2;
  }
`;
