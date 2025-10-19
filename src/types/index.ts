import type { ButtonHTMLAttributes, ReactNode } from "react";

// el mejor tipado de button
// hereda todos los pros validos de un Button..onclik, name, type, value etc...
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; 
}

