import { Route, Routes } from "react-router-dom"
import Counter from "../Pages/Counter"
import SwitchLight from "../Pages/SwitchLight"
import NotFound from "../Pages/NotFound"
import TextLive from "../Pages/TextLive"
import Home from "../Pages/Home"
import MainLayout from "../layouts/MainLayout"
import Visibility from "../Pages/Visibility"

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />

            <Route element={<MainLayout />}>
                <Route path="/Counter" element={<Counter />} />
                <Route path="/SwitchLight" element={<SwitchLight />} />
                <Route path="/TextLive" element={<TextLive />} />
                <Route path="/Visibility" element={<Visibility />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter