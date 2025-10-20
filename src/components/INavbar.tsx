import { NavLink, replace, useNavigate } from "react-router-dom"
import IButton from "./IButton";
import { MdExitToApp } from "react-icons/md";

const INavbar = () => {

    const navigate = useNavigate();

    const toggleHome = () => {
        navigate("/", {replace: true}) // manda al Home y reemplaza el historial
    };

    return (
        <nav className="flex justify-center">
            <ul className="items-center gap-1.5  menu menu-horizontal bg-base-200 font-medium">
                <li><NavLink to="/Counter">Num 1</NavLink></li>
                <li><NavLink to="/SwitchLight">Num 2</NavLink></li>
                <li><NavLink to="/TextLive">Num 3</NavLink></li>
                <li><NavLink to="/Visibility">Num 4</NavLink></li>
                <li><NavLink to="/EmojiChange">Num 5</NavLink></li>

                {/* button for go to Home */}
                <li>
                    <IButton className="px-4.5 py-0.5" onClick={toggleHome}><MdExitToApp /></IButton>
                </li>
            </ul>
        </nav>
    )
}

export default INavbar