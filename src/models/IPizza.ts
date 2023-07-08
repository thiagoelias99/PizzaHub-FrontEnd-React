import { IIngredientWQuantity } from "./IIngredient";

export interface IPizza {
    id: string,
    description: string,
    sellingPrice: number,
    ingredients?: IIngredientWQuantity[]
}