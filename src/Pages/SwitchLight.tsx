import { useState } from "react"
import { BsLightningFill } from "react-icons/bs";
import IButton from "../components/IButton";
const SwitchLight = () => {

    const [light, setLight] = useState<boolean>(false);

    const handleClick = () => {
        setLight(!light)
    }

    const changeLight = light
        ? "text-amber-400 animate-pulse drop-shadow-[0_0_12px_rgba(251,191,36,1)]"
        : "text-gray-400"

    return (
        <>
            <div className="flex min-h-[calc(100vh-64px)] justify-center items-center flex-col gap-5.5">
                <div className="text-6xl">
                    <BsLightningFill className={changeLight} />
                </div>
                <IButton
                    id="btn"
                    onClick={handleClick}>
                    {light ? 'Turn Off' : 'Turn On'}
                </IButton>
            </div>
        </>
    )
}

export default SwitchLight