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

  button{
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
background: #20212C;
box-shadow: 0px 0px 25px #20212C;
padding: 6rem;
position: fixed;
border-radius: 0.24rem;
`;
