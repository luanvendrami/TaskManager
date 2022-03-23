import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  .inputPrincipal {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    color: "#CCC";
  }
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

export const Button = styled.button(
  ({ edit }: EditButtonProps) => `
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
`
);
