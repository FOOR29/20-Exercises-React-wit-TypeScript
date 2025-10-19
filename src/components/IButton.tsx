import type { IButtonProps } from "../types"


const IButton = ({ children, className = "", ...props }: IButtonProps) => {
    return (
        <button
            {...props}
            className={`btn btn-lg btn-soft btn-primary ${className}`}>
            {children}
        </button>
    )
}

export default IButton