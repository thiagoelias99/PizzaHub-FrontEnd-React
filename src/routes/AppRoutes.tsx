import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { IngredientList } from "../pages/ingredients/IngredientsList";
import { IngredientsDetails } from "../pages/ingredients/IngredientsDetails";
import { PizzasList } from "../pages/pizzas/PizzasList";
import { PizzasDetails } from "../pages/pizzas/PizzaDetails/PizzasDetails";
import { useAppDrawerContext } from "../context/DrawerContext";
import { useEffect } from "react";

import HomeIcon from "@mui/icons-material/Home";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import InventoryIcon from "@mui/icons-material/Inventory";

const AppRoutes = () => {
    const { setDrawerOptions } = useAppDrawerContext();

    //Set Drawer Itens
    useEffect(() => {
        setDrawerOptions([
            {
                icon: <HomeIcon />,
                path: "/dashboard",
                label: "Página Inicial",
            },
            {
                icon: <InventoryIcon />,
                path: "/ingredients",
                label: "Ingredientes",
            },
            {
                icon: <LocalPizzaIcon />,
                path: "/pizzas",
                label: "Pizzas",
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="ingredients" element={<IngredientList />} />
            <Route path="ingredients/:id" element={<IngredientsDetails />} />
            <Route path="pizzas" element={<PizzasList />} />
            <Route path="pizzas/:id" element={<PizzasDetails />} />
            <Route path="*" element={<div>Pagina Não Encontrada</div>} />
        </Routes>
    );
};

export default AppRoutes;