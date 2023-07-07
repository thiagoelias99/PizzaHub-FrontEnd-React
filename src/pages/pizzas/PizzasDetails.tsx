import { Link, useParams } from "react-router-dom";
import { IPizza } from "../../models/IPizza";
import { useFetch } from "../../hooks/useFetch";

const route = "pizzas";

export function PizzasDetails() {
    const { id } = useParams();
    const { data: pizza } = useFetch<IPizza | null>(`${route}/${id}`);

    return (
        <>
            <h2>Ingedients Details</h2>
            <Link to={"/pizzas"}>
                voltar
            </Link>
            <h4>{pizza?.description}</h4>
            <p>{pizza?.sellingPrice}</p>
            <ul>
                {pizza?.ingredients?.map(ingredient => {
                    return (
                        <li key={ingredient?.id}>
                            <h5>{ingredient?.description}</h5>
                            <p>{ingredient?.ingredient_quantity}</p>
                            <p>{ingredient?.unit}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}