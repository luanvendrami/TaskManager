import { ReactNode } from "react";

interface PropsButtons {
  disabled: boolean;
  onClick: () => void;
  className: string;
  children: ReactNode;
}

export function ButtonGrid({
  disabled,
  onClick,
  className,
  children,
}: PropsButtons) {
  return (
    <button disabled={disabled} onClick={() => onClick()} className={className}>
      {children}
    </button>
  );
}
