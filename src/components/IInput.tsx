import type { IInputProps } from "../types"

const IInput = ({ placeholder="Primary", type, className = "", ...props }: IInputProps) => {
    return (
        <input 
        {...props}
        type="text" 
        placeholder={placeholder} 
        className={`input input-primary" ${className}`}
        />
    )
}

export default IInput