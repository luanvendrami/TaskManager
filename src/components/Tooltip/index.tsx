import { ReactNode } from "react";
import information from "../../assets/information.svg";
import { Container } from "./styled";

type PropsTooltip = {
  children: ReactNode;
};

export function Tooltip({ children }: PropsTooltip) {
  return (
    <Container>
      <div className="tooltip" data-direction="bottom">
        <div className="tooltip__initiator">
          <img src={information} alt="Informações" />
          <i className="fa fa-info-circle"></i>
        </div>
        <div className="tooltip__item">{children}</div>
      </div>
    </Container>
  );
}