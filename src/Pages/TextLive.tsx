import { useState, type ChangeEvent } from "react"
import IInput from "../components/IInput"

const TextLive = () => {

    const [text, setText] = useState<string>('...')

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }

    return (
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center flex-col gap-5.5">
            <IInput onChange={handleChange} placeholder="Write somenthing..." />
            <div className="border-2 border-dashed p-1.5 w-xs h-10 overflow-hidden font-bold italic">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default TextLive