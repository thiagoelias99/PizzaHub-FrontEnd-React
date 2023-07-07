import { useFetch } from "./hooks/useFetch";
import { IIngredient } from "./models/IIngredient";
import { WebClient as client } from "./services/webclient/axiosConfig";
import { AxiosError } from "axios";

import AppRoutes from "./routes/AppRoutes";

function App() {
    return(
        <AppRoutes />
    );
}

export default App;
