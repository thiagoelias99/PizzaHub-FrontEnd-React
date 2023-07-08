import { Link, useParams } from "react-router-dom";
import { IPizza } from "../../models/IPizza";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { IIngredientWQuantity } from "../../models/IIngredient";

const route = "pizzas";

export function PizzasDetails() {
    const { id } = useParams();
    const { data: pizza } = useFetch<IPizza | null>(`${route}/${id}`);

    const [description, setDescription] = useState("");
    const [sellingPrice, setSellingPrice] = useState(0);
    const [ingredients, setIngredients] = useState<IIngredientWQuantity[] | []>([]);

    useEffect(() => {
        setDescription(pizza?.description || "");
        setSellingPrice(pizza?.sellingPrice || 0);
        setIngredients(pizza?.ingredients || []);
    }, [pizza]);

    async function handleForm(event: React.FormEvent) {
        event.preventDefault();

    }

    return (
        <>
            <h2>Ingedients Details</h2>
            <Link to={"/pizzas"}>
                voltar
            </Link>
            <form onSubmit={handleForm}>
                <label>Descrição</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Preço</label>
                <input type="text" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} />
                <input type="submit" value="Atualizar" />
            </form>
            <ul>
                {ingredients.map(ingredient => {
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