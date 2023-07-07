export interface IPizza {
    id: string,
    description: string,
    sellingPrice: number,
    ingredients?: {
        id: string,
        ingredient_quantity: number,
        description: string,
        unit: string,
        valuePerUnit: number,
    }[]
}