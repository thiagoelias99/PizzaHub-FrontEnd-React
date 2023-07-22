import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IIngredient } from "../../models/IIngredient";
import { useEffect, useState } from "react";
import { WebClient as api } from "../../services/webclient/axiosConfig";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { BackButton } from "../../components/Buttons/BackButton";
import { FormContainer } from "../../components/Forms/FormContainer";
import { TextField } from "@mui/material";
import { FormTextInputField } from "../../components/Forms/FormTextInputField";
import { FormSubmitButton } from "../../components/Forms/FormSubmitButton";

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
        <AppContainer>
            <h2>Ingedients Details</h2>
            <BackButton linkTo="/ingredients" />
            <FormContainer
                onSubmit={handleForm}
            >
                <FormTextInputField
                    label="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormTextInputField
                    label="Unidade"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                />
                <FormTextInputField
                    label="Valor por Unidade"
                    value={valuePerUnit.toString()}
                    onChange={(e) => setValuePerUnit(Number(e.target.value))}
                    type="number"
                />
                <FormSubmitButton
                    label="Salvar"
                />
            </FormContainer>
        </AppContainer>
    );
}