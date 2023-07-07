import { Link, useParams } from "react-router-dom";
import { IPizza } from "../../models/IPizza";
import { useFetch } from "../../hooks/useFetch";
import { IIngredient, IIngredientWithQuantity } from "../../models/IIngredient";
import { useEffect, useState } from "react";
import { WebClient as client } from "../../services/webclient/axiosConfig";

const route = "pizzas";

export function PizzasDetails() {
    const { id } = useParams();
    const { data: pizza } = useFetch<IPizza | null>(`${route}/${id}`);
    const [ingredients, setIngredients] = useState<(IIngredientWithQuantity | null)[] | []>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (pizza?.ingredients) {
            const ingredients2 = pizza.ingredients.map(async ingredient => {
                const id = ingredient.id;
                return await client().get<IIngredient | null>(`ingredients/${id}`);
            });

            const itensToAdd: IIngredientWithQuantity[] = [];

            Promise.all(ingredients2)
                .then(result => {
                    result.forEach((item, index) => {
                        if (item) {
                            const num = pizza.ingredients ? pizza.ingredients[index].ingredient_quantity : 0;
                            itensToAdd.push({ ...item.data, quantity: num });
                        }
                    });                    
                    console.log(itensToAdd);
                    setIngredients(itensToAdd);
                });

        }
    }, [pizza]);

    return (
        <>
            <h2>Ingedients Details</h2>
            <Link to={"/pizzas"}>
                voltar
            </Link>
            <h4>{pizza?.description}</h4>
            <p>{pizza?.sellingPrice}</p>
            <ul>
                {ingredients?.map(ingredient => {
                    return (
                        <li key={ingredient?.id}>
                            <h5>{ingredient?.description}</h5>
                            <p>{ingredient?.quantity}</p>
                            <p>{ingredient?.unit}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}