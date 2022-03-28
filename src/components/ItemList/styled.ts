import styled from "styled-components";

type PropsBorderStatus = {
  status: boolean;
  checked: boolean;
};

export const Container = styled.div(
  ({ status, checked }: PropsBorderStatus) => `
  display: flex;
  background-color: #20212c;
  border: 1px solid ${checked ? (status ? "red" : "none") : "none"};
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
`
);
