import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react";

interface IFormAutoCompleteProps {
    label?: string
    optionList: { id: string, label: string }[]
    value: { id: string, label: string } | null
    onChange: (event: any, newValue: { id: string, label: string } | null) => any
}

export const FormAutoComplete: FC<IFormAutoCompleteProps> = ({label = "", optionList, value, onChange }) => {

    return (
        <Autocomplete
            disablePortal
            options={optionList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={label} />}
            value={value}
            onChange={onChange}
        />
    );
};