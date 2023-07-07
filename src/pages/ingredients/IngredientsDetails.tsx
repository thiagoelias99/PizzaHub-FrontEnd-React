import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IIngredient } from "../../models/IIngredient";
import { useEffect, useState } from "react";
import { WebClient as api } from "../../services/webclient/axiosConfig";

const route = "ingredients";

export function IngredientsDetails() {
    const { id } = useParams();
    const { data: ingredient } = useFetch<IIngredient | null>(`${route}/${id}`);

    const [description, setDescription] = useState("");
    const [valuePerUnit, setValuePerUnit] = useState(0);
    const [unit, setUnit] = useState("");

    useEffect(() => {
        setDescription(ingredient?.description || "");
        setValuePerUnit(ingredient?.valuePerUnit || 0);
        setUnit(ingredient?.unit || "");

    }, [ingredient]);

    async function handleForm(event: React.FormEvent) {
        event.preventDefault();
        await api().put(`${route}/${id}`, {
            description,
            unit,
            valuePerUnit: Number(valuePerUnit),
        });
    }


    return (
        <>
            <h2>Ingedients Details</h2>
            <Link to={"/ingredients"}>
                voltar
            </Link>
            <form onSubmit={handleForm}>
                <label>Descrição</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Unidade</label>
                <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />
                <label>Valor por Unidade</label>
                <input type="text" value={valuePerUnit} onChange={(e) => setValuePerUnit(Number(e.target.value))} />
                <input type="submit" value="Atualizar" />
            </form>
        </>
    );
}