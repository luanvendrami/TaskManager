import styled from "styled-components";

type ContainerProps = {
  done: boolean;
  finalizada: boolean;
};


export const Container = styled.div(({ done, finalizada }: ContainerProps) =>`
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
          cursor: ${finalizada ? "auto":"pointer"};

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
        cursor:${done ? "pointer" : "auto" && finalizada ? "auto"  : "pointer"};
        filter: ${finalizada ? "none" : "brightness(0.9)" && done ? "brightness(0.9)" : "none"};
      }
    }

    .buttonEdit{
      color: white;
      background: ${finalizada ? "#CCC" : "#cc8400" && done ? "#cc8400 " : "#CCC" };
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
      transition: filter 0.2s;
  
      &:hover {
        cursor:${finalizada ? "auto"  : "pointer" && done ? "pointer" : "auto"};
        filter: ${finalizada ? "none" : "brightness(0.9)" && done ? "brightness(0.9)" : "none"};
      }
    }


    
    .buttonFinalizado{
      color: white;
      background: ${finalizada ? "#555fed"  : "#CCC"};
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.3rem;
      margin-top: auto;
      font-weight: 400;
      transition: filter 0.2s;
  
      &:hover {
        cursor:${finalizada ? "auto"  : "pointer" && done ? "pointer" : "auto"};
        filter: ${finalizada ? "none" : "brightness(0.9)" && done ? "brightness(0.9)" : "none"};
      }
    }
`
);



export const DivDelete = styled.div`
  height: 30px;
  width: 60px;
  position: absolute;
  left: 71%;
`;

export const DivEdit = styled.div`
  height: 30px;
  width: 60px;
  position: absolute;
  left: 67%;
`;

export const DivFinalizada = styled.div`
  height: 30px;
  width: 60px;
  position: absolute;
  left: 61.7%;
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
  background: ${edit === 0 ? "green" : edit === 1 ? "red" : "#555fed"};
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
  

