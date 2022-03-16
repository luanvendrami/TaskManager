import { memo, ReactNode, useEffect, useState } from "react";
import { IDados } from "../../interface/IDados";
import * as C from "./styled";

type Props = {
  children: ReactNode;
};

export function ListItem({ children }: Props) {
  return <C.Container>{children}</C.Container>;
}

export const ListItemMemoized = memo(ListItem);
