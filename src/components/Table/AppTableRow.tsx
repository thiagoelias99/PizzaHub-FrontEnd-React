import { TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IAppTableRowProps {
    id: string
    linkTo?: string
    values: string[]
}

export const AppTableRow: FC<IAppTableRowProps> = ({ id, linkTo = "/", values }) => {
    return (
        <TableRow>
            <Link to={linkTo}>
                {values.map(data => {
                    return (
                        <TableCell key={data}>
                            {data}
                        </TableCell>
                    );
                })}
            </Link>
        </TableRow>
    );
};