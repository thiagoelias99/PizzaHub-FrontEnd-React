import { useParams } from "react-router-dom";
import { IPizza } from "../../../models/IPizza";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { IIngredient, IIngredientWQuantity } from "../../../models/IIngredient";
import { IngredientItem } from "./IngredientItem";
import { WebClient as api } from "../../../services/webclient/axiosConfig";
import { AppContainer } from "../../../components/AppContainer/AppContainer";
import { BackButton } from "../../../components/Buttons/BackButton";
import { FormContainer } from "../../../components/Forms/FormContainer";
import { FormTextInputField } from "../../../components/Forms/FormTextInputField";
import { FormSubmitButton } from "../../../components/Forms/FormSubmitButton";
import { AppTableContainer } from "../../../components/Table/AppTableContainer";
import { FormAutoComplete } from "../../../components/Forms/FormAutoComplete";
import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { FormTextViewField } from "../../../components/Forms/FormTextViewField";

const pizzaRoute = "pizzas";
const ingredientsRoute = "ingredients";

export function PizzasDetails() {
    const { id } = useParams();
    const { data: pizza } = useFetch<IPizza | null>(`${pizzaRoute}/${id}`);

    const [description, setDescription] = useState("");
    const [sellingPrice, setSellingPrice] = useState(0);
    const [ingredients, setIngredients] = useState<IIngredientWQuantity[] | []>([]);
    const [searchedIngredients, setSearchedIngredients] = useState<IIngredient[] | []>([]);
    const [selectedIngredient, setSelectedIngredient] = useState<IIngredient | null>(null);
    const [quantity, setquantity] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setDescription(pizza?.description || "");
        setSellingPrice(pizza?.sellingPrice || 0);
        setIngredients(pizza?.ingredients || []);
        searchIngredients();
    }, [pizza]);

    async function handleForm(event: React.FormEvent) {
        event.preventDefault();
        handleSave();

    }

    function handleDeleteIngredient(id: string) {
        setIngredients(ingredients.filter(ingredient => ingredient.id != id));
    }

    function handleUpdateIngredientQuantity(id: string, quantity: number) {
        setIngredients(ingredients.map(ingredient => {
            if (ingredient.id == id) {
                return { ...ingredient, ingredient_quantity: quantity };
            } else {
                return ingredient;
            }
        }));
    }

    async function handleSave() {
        await api().put(`${pizzaRoute}/${id}`,
            {
                description,
                sellingPrice,
                ingredients: ingredients.map(({ id, ingredient_quantity }) => {
                    return {
                        id,
                        ingredient_quantity
                    };
                })
            });
    }

    async function searchIngredients() {
        api().get<IIngredient[]>(ingredientsRoute)
            .then(response => {
                console.log(response.data);
                setSearchedIngredients(response.data);
            });
    }

    function searchIngredientById(id?: string) {
        if (id) {
            api().get<IIngredient>(`${ingredientsRoute}/${id}`)
                .then(response => setSelectedIngredient(response.data));
        } else {
            setSelectedIngredient(null);
        }
    }

    function addIngredientToList() {
        closeAddIngredientDialog();
        if (selectedIngredient) {
            const ingredients2 = [...ingredients];

            ingredients2.push({
                ...selectedIngredient,
                ingredient_quantity: quantity
            });

            setIngredients(ingredients2);
        }
    }

    function openAddIngredientDialog() {
        setOpen(true);
    }

    function closeAddIngredientDialog() {
        setOpen(false);
    }

    return (
        <AppContainer>
            <Typography variant="h4">Detalhes da Pizza</Typography>
            <BackButton linkTo="/pizzas" />

            <FormContainer
                onSubmit={handleForm}
            >
                <Box
                    display="flex"
                    gap={1}
                >
                    <FormTextInputField
                        label="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <FormTextInputField
                        label="Preço"
                        value={sellingPrice.toString()}
                        onChange={(e) => setSellingPrice(Number(e.target.value))}
                        type="number"
                    />
                </Box>

                <Typography variant="h5">Ingredientes</Typography>
                <Button onClick={openAddIngredientDialog}>Adicionar</Button>

                <AppTableContainer
                    headers={["Descrição", "Quantidade", "Unidade"]}
                >
                    {ingredients.map(ingredient => {
                        return (
                            <IngredientItem
                                key={ingredient.id}
                                handleDelete={handleDeleteIngredient}
                                handleUpdateQuantity={handleUpdateIngredientQuantity}
                                {...ingredient} />
                        );
                    })}

                </AppTableContainer>

                <FormSubmitButton
                    label="Salvar"
                />
            </FormContainer>
            <Dialog open={open} onClose={closeAddIngredientDialog} >
                <DialogTitle>Adicionar Ingrediente</DialogTitle>
                <DialogContent>
                    <Box
                        height={350}
                    >
                        <FormAutoComplete
                            value={
                                selectedIngredient ? { id: selectedIngredient?.id, label: selectedIngredient?.description } : null}
                            onChange={(event: any, newValue: { id: string, label: string } | null) => {
                                searchIngredientById(newValue?.id);
                            }}
                            optionList={searchedIngredients.map(ingredient => {
                                return (
                                    {
                                        id: ingredient.id,
                                        label: ingredient.description
                                    }
                                );
                            })} />
                        <FormTextViewField value={selectedIngredient?.unit} label="Unidade" />
                        <FormTextInputField
                            value={quantity.toString()}
                            type="number"
                            onChange={e => setquantity(Number(e.target.value))}
                        />
                        <Button onClick={() => addIngredientToList()}>Adicionar</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </AppContainer>
    );
}