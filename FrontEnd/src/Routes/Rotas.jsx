import { CriarPersonagem } from "../Pages/CriarPersonagem";
import { Home } from "../Pages/Home";
import { Index } from "../Pages/Index";
import { Routes, Route } from "react-router-dom";
import { EditarPersonagem } from "../Pages/EditarPersonagem";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}>
                <Route index element={<Home/>}/>
            </Route>

            <Route path="/criarPersonagem" element={<Index/>}>
                <Route index element={<CriarPersonagem/>}/>
            </Route>

            <Route path="/editarPersonagem" element={<Index/>}>
                <Route index element={<EditarPersonagem/>}/>
            </Route>
        </Routes>
    );
}