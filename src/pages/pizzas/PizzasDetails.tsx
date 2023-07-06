import { Link } from "react-router-dom";

export function PizzasDetails() {
    return (
        <>
            <h2>Pizzas Details</h2>
            <Link to={"/pizzas"}>
                voltar
            </Link>
        </>
    );
}