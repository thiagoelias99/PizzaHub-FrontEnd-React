import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { IngredientList } from "../pages/ingredients/IngredientsList";
import { IngredientsDetails } from "../pages/ingredients/IngredientsDetails";
import { PizzasList } from "../pages/pizzas/PizzasList";
import { PizzasDetails } from "../pages/pizzas/PizzasDetails";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="ingredients" element={<IngredientList />}/>
            <Route path="ingredients/:id" element={<IngredientsDetails />}/>
            <Route path="pizzas" element={<PizzasList />}/>
            <Route path="pizzas/:id" element={<PizzasDetails />}/>
            <Route path="*" element={<div>Pagina Não Encontrada</div>} />
        </Routes>
    </BrowserRouter>
);
export default AppRoutes;