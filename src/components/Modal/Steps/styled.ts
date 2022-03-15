import styled from "styled-components";

type EditButtonProps = {
    edit: number;
  };
  

export const Button = styled.button(({edit}:EditButtonProps ) => `
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: ${edit === 0 ? "green" : edit === 1 ? "red" : edit === 2 ? "#555fed" : "green" };
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
