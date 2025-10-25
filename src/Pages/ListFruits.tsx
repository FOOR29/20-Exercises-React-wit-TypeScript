import { useState, type ChangeEvent, type FormEvent } from "react"
import IInput from "../components/IInput"
import IButton from "../components/IButton"
import { TiDelete } from "react-icons/ti";

const ListFruits = () => {

    const [fruits, setFruits] = useState<string[]>([]) // arrays vacio
    const [newFruits, setNewFruits] = useState('')

    const handleAddFruits = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (newFruits.trim() === "") return; //para evitar espacios
        setFruits([...fruits, newFruits])  // crea la nueva fruta y el array
        setNewFruits("") // limpiar el input
    }

    const deleteFruit = (index: any) => {
        const newFruit = fruits.filter((_, i) => i !== index)  // filtra todas menos la eliminada
        setFruits(newFruit)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setNewFruits(e.target.value)
    }

    return (
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center flex-col gap-5.5 font-bold">
            <h1>List Fruits</h1>
            <form>
                <div className="flex justify-center items-center gap-5.5">
                    <IInput type="text" value={newFruits} onChange={handleChange} placeholder="add fruit" />
                    <IButton onClick={handleAddFruits}>Add</IButton>
                </div>

                <ul className="flex flex-col py-1.5">
                    {fruits.map((fruta, index) => (
                        <li className="border-b border-primary flex justify-between px-1.5 py-1.5" key={index}>
                            {fruta}{" "}
                            <button type="button" onClick={() => deleteFruit(index)} className="text-red-500 text-2xl cursor-pointer">
                                <TiDelete />
                            </button>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default ListFruits