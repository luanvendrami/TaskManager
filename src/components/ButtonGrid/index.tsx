import { ReactNode } from "react";

interface PropsButtons{
    disabled: boolean;
    onClick: (isChecked:  boolean) => void;
    className: string;
    isEdit: number;
    isChecked: boolean;
    children: ReactNode;
}


 export function ButtonGrid({disabled , onClick, className, isEdit, isChecked, children}: PropsButtons){
    return(
        <button
          disabled={disabled}
          onClick={() => onClick(isChecked)}
          className={className}
          value={isEdit}
        >
          {children}
        </button>
    )
}