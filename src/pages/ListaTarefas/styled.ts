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

export const DivEditar = styled.div(
  ({ checked }: PropsButtonsGrid) => `
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
        cursor: ${checked ? "pointer" : "auto"};
        filter: ${checked ? "brightness(0.9)" : "none"};
      }
    background: ${checked ? "orange" : "#ccc"};
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

export const BoxInformacoes = styled.div`
  width: 100%;
  margin-left: 2rem;
  bottom: 60%;
  max-width: 160px;
  background: #20212c;
  box-shadow: 0px 0px 25px #20212c;
  padding: 6rem;
  position: fixed;
  border-radius: 0.24rem;
`;

export const ContainerInputDelete = styled.div``;

export const ContainerInputEdit = styled.div``;

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
