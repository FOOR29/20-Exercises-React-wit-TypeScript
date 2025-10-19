import { useState } from "react"
import IButton from "../components/IButton"

const Visibility = () => {
    
    const [paragraph, setParagraph] = useState<boolean>(false)

    const handleClick = () => {
        setParagraph(!paragraph)
    }

    const changeParagraph = paragraph ? 'I love You' : ''

    return (
        <>
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center flex-col gap-5.5">
            <p className="font-bold text-9xl animate-bounce">{changeParagraph}</p>
            <IButton onClick={handleClick}>{paragraph ? 'Hidden' : 'See'}</IButton>
        </div>
        </>
    )
}

export default Visibility