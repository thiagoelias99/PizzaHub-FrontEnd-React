import { Button } from "@mui/material";
import { FC } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

interface IBackButtonProps {
    linkTo?: string
}

export const BackButton: FC<IBackButtonProps> = ({ linkTo = "/" }) => {
    return (
        <Link to={linkTo}>
            <Button
                variant="contained"
                startIcon={<ArrowBackIosIcon />}
            >
                Voltar
            </Button>
        </Link>
    );
};