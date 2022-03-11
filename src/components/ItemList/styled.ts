import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;

        &:hover {
          cursor: pointer;

        }
    }

    label{
        color: ${done ? "#cc0000" : "#CCC"};
    }

    button{
      color: white;
      background: ${done ? "#cc0000" : "#CCC "};
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
  
      transition: filter 0.2s;
  
      &:hover {
        cursor:${done ? "pointer" : "auto"};
        filter: ${done ? "brightness(0.9)" : "none"};
      }
    }

`
);

export const DivFlutuante = styled.div`
  height: 30px;
  width: 60px;
  position: fixed;
  left: 70%;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: red;
  color: #CCC;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
