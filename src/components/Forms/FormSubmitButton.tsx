import { Button } from "@mui/material";
import { FC } from "react";
import SaveIcon from "@mui/icons-material/Save";

interface IFormSubmitButtonProps {
    label: string
}

export const FormSubmitButton: FC<IFormSubmitButtonProps> = ({ label }) => {
    return (
        <Button
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
            color="success"            
        >
            {label}
        </Button>
    );
};