import { useFetch } from "./hooks/useFetch";
import { IIngredient } from "./models/IIngredient";
import { WebClient as webClient } from "./services/webclient/axiosConfig";
import { useEffect } from "react";
import { WebClient as client } from "./services/webclient/axiosConfig";
import { AxiosError } from "axios";

function App() {
  const route = "ingredients"

  // useEffect(() => {
  // webClient().get("ingredients").then(response => console.log)
  // }, []);

  const { data, isLoading, error } = useFetch<IIngredient[]>(route)

  data?.forEach(ingredient => console.log(ingredient.description))

  const postNow = true;

  if (postNow) {
    client().post(route, {
      description: "Outro queijo"
    })
      .catch(err => {
        if (err instanceof AxiosError) {
          console.log(err.response?.status)
        } else (
          console.log(err)
        )
      })
  }

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
