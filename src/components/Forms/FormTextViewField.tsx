import { TextField } from "@mui/material";
import { FC } from "react";

interface IFormTextViewFieldProps {
    value?: string
    label?: string
    type?: React.HTMLInputTypeAttribute | undefined
}

export const FormTextViewField: FC<IFormTextViewFieldProps> = ({ value, label = "", type = "text" }) => {
    return (
        <TextField
            variant="outlined"
            label={label}
            value={value? value : ""}
            type={type}
            disabled
        />
    );
};