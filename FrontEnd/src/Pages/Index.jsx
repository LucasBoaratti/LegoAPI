import { Cabecalho } from "../Components/Cabecalho";
import { Outlet } from "react-router-dom";

export function Index() {
    return (
        <>
            <Cabecalho/>
            <Outlet/>
        </>
    );
}