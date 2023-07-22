import { TextField } from "@mui/material";
import { FC } from "react";

interface IFormTextField {
    value: string
    label: string
    type?: React.HTMLInputTypeAttribute | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

export const FormTextField: FC<IFormTextField> = ({ value, label, onChange, type = "text" }) => {
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