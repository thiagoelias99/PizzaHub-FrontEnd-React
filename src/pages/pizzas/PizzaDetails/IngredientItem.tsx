import { useState } from "react";
import { IIngredientWQuantity } from "../../../models/IIngredient";

interface IIngredientItemProps extends IIngredientWQuantity {
    handleDelete: (id: string) => void,
    handleUpdateQuantity: (id: string, quantity: number) => void
}

export const IngredientItem: React.FC<IIngredientItemProps> = ({ id, description, ingredient_quantity, unit, handleDelete, handleUpdateQuantity }) => {

    const [quantity, setQuantity] = useState(ingredient_quantity);

    return (
        <li>
            <h5>{description}</h5>
            <input type="number" value={quantity} onChange={e => setQuantity(Number (e.target.value))}/>
            <p>{unit}</p>
            <button onClick={() => handleDelete(id)}>Deletar</button>
            <button onClick={() => handleUpdateQuantity(id, quantity)}>Atualizar</button>
        </li>
    );
};