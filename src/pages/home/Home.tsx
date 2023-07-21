import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AppContainer } from "../../components/AppContainer/AppContainer";

export function Home() {
    return (
        <AppContainer        >
            <Typography
                variant="h3"

            >Home Page</Typography>
            <RouterLink to={"ingredients"}>
                <Link
                    underline="hover"
                    variant="h5"
                >Ingredients</Link>
            </RouterLink>
            <RouterLink to={"pizzas"}>
                <Link
                    underline="hover"
                    variant="h5"
                >Pizzas</Link>
            </RouterLink>
        </AppContainer>
    );
}