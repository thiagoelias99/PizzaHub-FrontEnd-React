import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IPizza } from "../../models/IPizza";

const route = "pizzas";

export function PizzasList() {
    const { data } = useFetch<IPizza[]>(route);

    return (
        <>
            <h2>Pizzas List</h2>
            <Link to={"/"}>
                voltar
            </Link>
            <nav>
                {data?.map(pizza => {
                    return (
                        <Link key={pizza.id} to={pizza.id}>
                            <p>{pizza.description}</p>
                            <p>{pizza.sellingPrice}</p>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}