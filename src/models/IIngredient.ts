export interface IIngredient {
    id: string,
    description: string,
    unit: string,
    valuePerUnit: number,
}

export interface IIngredientWithQuantity extends Partial<IIngredient>{
    quantity?: number
}