import { useState } from "react";
import { IIngredientWQuantity } from "../../../models/IIngredient";
import { FormTableRow } from "../../../components/Forms/FormTableRow";
import { FormTextViewField } from "../../../components/Forms/FormTextViewField";
import { TableCell } from "@mui/material";
import { FormTextInputField } from "../../../components/Forms/FormTextInputField";
import { AppTableDeleteButton } from "../../../components/Table/AppTableDeleteButton";
import { AppTableConfirmButton } from "../../../components/Table/AppTableConfirmButton";

interface IIngredientItemProps extends IIngredientWQuantity {
    handleDelete: (id: string) => void,
    handleUpdateQuantity: (id: string, quantity: number) => void
}

export const IngredientItem: React.FC<IIngredientItemProps> = ({ id, description, ingredient_quantity, unit, handleDelete, handleUpdateQuantity }) => {

    const [quantity, setQuantity] = useState(ingredient_quantity);

    return (
        <FormTableRow>
            <TableCell>
                <FormTextViewField
                    value={description}
                />
            </TableCell>
            <TableCell>
                <FormTextInputField
                    type="number"
                    value={quantity.toString()}
                    onChange={e => setQuantity(Number (e.target.value))}
                />
            </TableCell>
            <TableCell>
                <FormTextViewField
                    value={unit}
                />
            </TableCell>
            <TableCell>
                <AppTableConfirmButton onClick={() => handleUpdateQuantity(id, quantity)}/>
                <AppTableDeleteButton onClick={() => handleDelete(id)}/>
            </TableCell>
        </FormTableRow>
    );
};