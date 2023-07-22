import { TableRow } from "@mui/material";
import { FC, ReactNode } from "react";

interface IFormTableRowProps {
    children: ReactNode
}

export const FormTableRow: FC<IFormTableRowProps> = ({ children }) => {
    return (
        <TableRow>
            {children}
        </TableRow>
    );
};