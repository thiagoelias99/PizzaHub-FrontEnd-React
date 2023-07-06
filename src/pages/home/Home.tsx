import { Link } from "react-router-dom";
export function Home() {
    return (
        <>
            <h2>Home Page</h2>
            <Link to={"ingredients"}>
                Ingredients
            </Link>
            <Link to={"pizzas"}>
                Pizzas
            </Link>
        </>
    );
}