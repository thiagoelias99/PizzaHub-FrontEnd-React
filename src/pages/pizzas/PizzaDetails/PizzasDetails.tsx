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

const route = "pizzas";

export function PizzasDetails() {
    const { id } = useParams();
    const { data: pizza } = useFetch<IPizza | null>(`${route}/${id}`);

    const [description, setDescription] = useState("");
    const [sellingPrice, setSellingPrice] = useState(0);
    const [ingredients, setIngredients] = useState<IIngredientWQuantity[] | []>([]);
    const [searchIngredient, setSearchIngredient] = useState("");
    const [searchedIngredients, setSearchedIngredients] = useState<IIngredient[] | []>([]);
    const [selectedIngredient, setSelectedIngredient] = useState<IIngredient | null>(null);
    const [quantity, setquantity] = useState(0);

    useEffect(() => {
        setDescription(pizza?.description || "");
        setSellingPrice(pizza?.sellingPrice || 0);
        setIngredients(pizza?.ingredients || []);
        handleSearchIngredient("");
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
        console.log("handle Save");
        await api().put(`${route}/${id}`,
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

    async function handleSearchIngredient(description: string) {
        // const validatedDescription = description.trimStart().toLowerCase();
        // setSearchIngredient(validatedDescription);


        // if (validatedDescription.length != 0) {
        api().get<IIngredient[]>("ingredients")
            .then(response => {
                console.log(response.data);
                setSearchedIngredients(response.data);
            });
        // api().get<IIngredient[]>(`ingredients?description=${validatedDescription}`)
        //     .then(response => {
        //         console.log(response.data);
        //         setSearchedIngredients(response.data);
        //     });
        // }
    }

    function handleSelectIngredient(id?: string) {
        if(id){
            api().get<IIngredient>(`ingredients/${id}`)
                .then(response => setSelectedIngredient(response.data));
        } else{
            setSelectedIngredient(null);
        }
    }

    function addIngredient() {
        if (selectedIngredient) {
            const ingredients2 = [...ingredients];

            ingredients2.push({
                ...selectedIngredient,
                ingredient_quantity: quantity
            });

            setIngredients(ingredients2);
        }

    }

    return (
        <AppContainer>
            <h2>Pizza Details</h2>
            <BackButton linkTo="/pizzas" />

            <FormContainer
                onSubmit={handleForm}
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
            </FormContainer>

            <FormAutoComplete
                value={
                    selectedIngredient ? { id: selectedIngredient?.id, label: selectedIngredient?.description } : null}
                onChange={(event: any, newValue: { id: string, label: string } | null) => {
                    handleSelectIngredient(newValue?.id);
                }}

                optionList={searchedIngredients.map(ingredient => {
                    return (
                        {
                            id: ingredient.id,
                            label: ingredient.description
                        }
                    );
                })} />

            <FormSubmitButton
                label="Salvar"
            />

            {/* <input type="text" value={searchIngredient} onChange={e => handleSearchIngredient(e.target.value)} />

            <ul>
                {searchedIngredients.map(({ id, description }) => {
                    return (
                        <li
                            key={id}
                            onClick={() => handleSelectIngredient(id)}
                        >
                            {description}
                        </li>
                    );
                })}
            </ul> */}

            {selectedIngredient && (
                <>
                    <p>{selectedIngredient.description}</p>
                    <p>{selectedIngredient.unit}</p>
                    <input type="number" value={quantity} onChange={e => setquantity(Number(e.target.value))} />
                    <input type="button" onClick={() => addIngredient()} />
                </>


            )}
        </AppContainer>
    );
}