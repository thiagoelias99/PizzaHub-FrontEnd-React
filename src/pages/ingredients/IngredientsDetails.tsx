import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IIngredient } from "../../models/IIngredient";

const route = "ingredients";

export function IngredientsDetails() {
    const { id } = useParams();
    const { data: ingredient } = useFetch<IIngredient | null>(`${route}/${id}`);

    return (
        <>
            <h2>Ingedients Details</h2>
            <Link to={"/ingredients"}>
                voltar
            </Link>
            <h4>{ingredient?.description}</h4>
            <p>{ingredient?.valuePerUnit}</p>
            <p>{ingredient?.unit}</p>
        </>
    );
}