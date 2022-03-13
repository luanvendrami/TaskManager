import styled from "styled-components";

export const Container = styled.div`
  background-color: #262833;
  color: #797a81;
  min-height: 100vh;
`;

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
`;

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


export const DivFlutuante = styled.div`
  height: 30px;
  width: 60px;
  position: fixed;
  left: 25%;
  bottom: 97.6%;


  .react-button-voltar {
    width: 3rem;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: none;
    background: transparent;

    transition: filtro 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

`;
