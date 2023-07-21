import { useFetch } from "../../hooks/useFetch";
import { IIngredient } from "../../models/IIngredient";
import { Typography } from "@mui/material";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { BackButton } from "../../components/Buttons/BackButton";
import { AppTableContainer } from "../../components/Table/AppTableContainer";
import { AppTableRow } from "../../components/Table/AppTableRow";

const route = "ingredients";

export function IngredientList() {
    const { data } = useFetch<IIngredient[]>(route);
    return (
        <AppContainer>
            <Typography variant="h3">Ingedients List</Typography>
            <BackButton />
            <AppTableContainer headers={["Descrição", "Valor", "Unidade"]}>
                {data?.map(ingredient => {
                    return (
                        <AppTableRow
                            id={ingredient.id}
                            key={ingredient.id}
                            linkTo={ingredient.id}
                            values={[
                                ingredient.description,
                                ingredient.valuePerUnit.toString(),
                                ingredient.unit
                            ]}
                        />
                    );
                })}
            </AppTableContainer>
        </AppContainer>
    );
}