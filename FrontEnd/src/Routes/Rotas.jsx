import { Cabecalho } from "../Components/Cabecalho";
import { Home } from "../Pages/Home";
import { Index } from "../Pages/Index";
import { Routes, Route } from "react-router-dom";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}