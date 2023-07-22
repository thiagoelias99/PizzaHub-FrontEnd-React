import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface IFormContainer {
    children: ReactNode,
    onSubmit: (event: React.FormEvent) => any
}

export const FormContainer: FC<IFormContainer> = ({ children, onSubmit }) => {
    return (
        <Box
            component="form"
            display='flex'
            flexDirection="column"
            alignItems='start'
            gap={1}
            marginX={1}
            marginY={2}
            paddingX={2}
            paddingY={1}
            onSubmit={onSubmit}
        >
            {children}
        </Box>
    );
};