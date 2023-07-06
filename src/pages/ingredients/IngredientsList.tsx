import { Link } from "react-router-dom";

export function IngredientList() {
    return (
        <>
            <h2>Ingedients List</h2>
            <Link to={"/"}>
                voltar
            </Link>
            <Link to={"1"}>
                Ingredient 1
            </Link>
        </>
    );
}