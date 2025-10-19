import { useNavigate } from "react-router-dom"
import IButton from "../components/IButton"

const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Counter")
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Welcome, this repo has 20 exercises to practice useState, each one increasing in level.
                    </p>
                    <IButton onClick={handleNavigate}>Start</IButton>
                </div>
            </div>
        </div>
    )
}

export default Home