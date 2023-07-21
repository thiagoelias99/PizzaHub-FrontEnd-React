import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { FC, ReactNode } from "react";

interface IAppTableContainer {
    children: ReactNode
    headers: string[]
}

export const AppTableContainer: FC<IAppTableContainer> = ({ children, headers }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map(header => {
                            return (
                                <TableCell key={header}>
                                    {header}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    );
};