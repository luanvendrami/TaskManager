import { ReactNode, useState } from "react";
import api from "../../service/api";
import * as C from "./styled";

type Props = {
  children: ReactNode;
};

export function AddArea({ children }: Props) {
  return <C.Container>{children}</C.Container>;
}
