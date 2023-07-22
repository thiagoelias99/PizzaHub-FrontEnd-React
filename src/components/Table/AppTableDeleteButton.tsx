import { IconButton } from "@mui/material";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface IAppTableDeleteButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}


export const AppTableDeleteButton: FC<IAppTableDeleteButtonProps> = ({ onClick }) => {
    return (

        <IconButton
            aria-label="delete"
            color="error"
            onClick={onClick}
        >
            <DeleteIcon />
        </IconButton>
    );
};