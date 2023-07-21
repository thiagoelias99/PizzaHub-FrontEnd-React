import { useFetch } from "../../hooks/useFetch";
import { IPizza } from "../../models/IPizza";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { BackButton } from "../../components/Buttons/BackButton";
import { AppTableContainer } from "../../components/Table/AppTableContainer";
import { AppTableRow } from "../../components/Table/AppTableRow";

const route = "pizzas";

export function PizzasList() {
    const { data } = useFetch<IPizza[]>(route);

    return (
        <AppContainer>
            <h2>Pizzas List</h2>
            <BackButton />
            <AppTableContainer headers={["Descrição", "Valor"]}>
                {data?.map(pizza => {
                    return (
                        <AppTableRow
                            id={pizza.id}
                            key={pizza.id}
                            linkTo={pizza.id}
                            values={[
                                pizza.description,
                                pizza.sellingPrice.toString(),
                            ]}
                        />
                    );
                })}
            </AppTableContainer>
        </AppContainer>
    );
}