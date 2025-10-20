import { useState } from "react"
import IButton from "../components/IButton";
import { BsFillEmojiGrinFill, BsEmojiFrownFill } from "react-icons/bs";

const EmojiChange = () => {

    const [emoji, setEmoji] = useState<boolean>(true);

    const handleClick = () => {
        setEmoji(!emoji)
    }

    const changeEmoji = emoji
        ? <BsFillEmojiGrinFill className="text-amber-300 animate-bounce drop-shadow-[0_0_12px_rgba(210,190,26,1)]" />
        : <BsEmojiFrownFill className="text-gray-600 animate-pulse" />

    return (
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center flex-col gap-5.5">
            <span className="text-5xl">
                {changeEmoji}
            </span>
            <IButton onClick={handleClick}>Change</IButton>
        </div>
    )
}

export default EmojiChange