import { Link } from "react-router-dom";

export function PizzasList() {
    return (
        <>
            <h2>Pizza List</h2>
            <Link to={"/"}>
                voltar
            </Link>
            <Link to={"1"}>
                pizza 1
            </Link>
        </>
    );
}