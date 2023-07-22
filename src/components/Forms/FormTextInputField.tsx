import { TextField } from "@mui/material";
import { FC } from "react";

interface IFormTextInputFieldProps {
    value: string
    label?: string
    type?: React.HTMLInputTypeAttribute | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

export const FormTextInputField: FC<IFormTextInputFieldProps> = ({ value, label = "", onChange, type = "text" }) => {
    return (
        <TextField
            variant="outlined"
            label={label}
            value={value}
            onChange={onChange}
            type={type}
        />
    );
};