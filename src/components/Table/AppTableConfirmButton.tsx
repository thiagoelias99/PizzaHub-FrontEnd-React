import { IconButton } from "@mui/material";
import { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";

interface IAppTableConfirmButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}


export const AppTableConfirmButton: FC<IAppTableConfirmButtonProps> = ({ onClick }) => {
    return (

        <IconButton
            aria-label="confirm"
            color="success"
            onClick={onClick}
        >
            <CheckIcon />
        </IconButton>
    );
};