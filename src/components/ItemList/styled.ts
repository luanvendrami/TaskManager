import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};


export const Container = styled.div(({ done }: ContainerProps) =>`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    .inputPrincipal{
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

    .buttonDelete{
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

    .buttonEdit{
      color: white;
      background: ${done ? "#cc8400 " : "#CCC "};
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

export const DivFlutuanteDelete = styled.div`
  height: 30px;
  width: 60px;
  position: fixed;
  left: 70%;
`;

export const DivFlutuanteEdit = styled.div`
  height: 30px;
  width: 60px;
  position: fixed;
  left: 66%;

`;

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


type EditButtonProps = {
  edit: number;
};

export const Button = styled.button(({edit}:EditButtonProps ) => `
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: ${edit === 0 ? "green" : "red"};
  color: #ccc;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`);
  

