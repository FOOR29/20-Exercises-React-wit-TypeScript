import { NavLink } from "react-router-dom"

const INavbar = () => {
    return (
        <nav>
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><NavLink to="/">1</NavLink></li>
                <li><NavLink to="SwitchLight">2</NavLink></li>
                <li><NavLink to="">3</NavLink></li>
            </ul>
        </nav>
    )
}

export default INavbar