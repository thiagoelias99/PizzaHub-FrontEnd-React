import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IIngredient } from "../../models/IIngredient";

const route = "ingredients";

export function IngredientList() {
    const { data } = useFetch<IIngredient[]>(route);

    return (
        <>
            <h2>Ingedients List</h2>
            <Link to={"/"}>
                voltar
            </Link>
            <nav>
                {data?.map(ingredient => {
                    return (
                        <Link key={ingredient.id} to={ingredient.id}>
                            <p>{ingredient.description}</p>
                            <p>{ingredient.valuePerUnit}</p>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}