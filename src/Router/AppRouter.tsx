import { Route, Routes } from "react-router-dom"
import Counter from "../Pages/Counter"
import SwitchLight from "../Pages/SwitchLight"
import NotFound from "../Pages/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Counter />} />
            <Route path="/" element={<Counter />} />
            <Route path="/SwitchLight" element={<SwitchLight />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter