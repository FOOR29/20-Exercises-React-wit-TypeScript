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
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <IButton onClick={handleNavigate}>Start</IButton>
                </div>
            </div>
        </div>
    )
}

export default Home