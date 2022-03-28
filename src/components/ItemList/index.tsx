import { memo, ReactNode, useEffect, useState } from "react";
import { IDados } from "../../interface/IDados";
import * as C from "./styled";

type Props = {
  children: ReactNode;
  status: boolean;
  checked: boolean;
};

export function ListItem({ children, status, checked }: Props) {
  return (
    <C.Container status={status} checked={checked}>
      {children}
    </C.Container>
  );
}

export const ListItemMemoized = memo(ListItem);
