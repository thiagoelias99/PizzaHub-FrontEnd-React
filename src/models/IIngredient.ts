export interface IIngredient {
    id: string,
    description: string,
    unit: string,
    valuePerUnit: number,
}

export interface IIngredientWQuantity extends IIngredient{
    ingredient_quantity: number
}