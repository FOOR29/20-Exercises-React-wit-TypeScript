import { NavLink } from "react-router-dom"

const INavbar = () => {
    return (
        <nav className="flex justify-center">
            <ul className="menu menu-horizontal bg-base-200 font-medium">
                <li><NavLink to="/Counter">Num 1</NavLink></li>
                <li><NavLink to="/SwitchLight">Num 2</NavLink></li>
                <li><NavLink to="/TextLive">Num 3</NavLink></li>
                <li><NavLink to="/Visibility">Num 4</NavLink></li>
                <li><NavLink to="/EmojiChange">Num 5</NavLink></li>
            </ul>
        </nav>
    )
}

export default INavbar