import { useState } from "react"
import IButton from "../components/IButton"
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Counter = () => {

    const [count, setCount] = useState<number>(10)
    const [decreasing, setDecreasing] = useState<boolean>(true)


    const handleClcik = () => {
        setCount(count - 1)
        if (decreasing) {
            if (count == 0) {
                // si llega a cero cambiamos la direccion
                setDecreasing(false)
                setCount(count + 1)
            } else {
                setCount(count - 1)
            }
        } else {
            setCount(count + 1)
        }
    }



    return (
        <>
            <div className="flex min-h-[calc(100vh-64px)] justify-center items-center flex-col gap-1.5">
                <span className="font-bold text-3xl">{count}</span>
                <IButton onClick={handleClcik}>{decreasing ? <FaAngleDown /> : <FaAngleUp />}</IButton>
            </div>
        </>
    )
}

export default Counter