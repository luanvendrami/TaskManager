import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

type PropsButton = {
  modalStyle: number | undefined;
};
export const Button = styled.button(
  ({ modalStyle }: PropsButton) =>
    `
width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: ${
    modalStyle === 0 ? "red" : modalStyle === 1 ? "orange" : "#ccc"
  };
  color: #fff;
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
