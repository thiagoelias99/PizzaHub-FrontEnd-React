import { Link } from "react-router-dom";

export function IngredientsDetails() {
    return (
        <>
            <h2>Ingedients Details</h2>
            <Link to={"/ingredients"}>
                voltar
            </Link>
        </>
    );
}