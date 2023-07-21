import { ReactNode, FC } from "react";
import { Box, Paper } from "@mui/material";

interface IAppContainerProps {
    children: ReactNode,
}

export const AppContainer: FC<IAppContainerProps> = ({ children }) => {
    return (
        <Box
            component={Paper}
            display='flex'
            flexDirection="column"
            alignItems='start'
            gap={1}
            marginX={1}
            marginY={2}
            paddingX={2}
            paddingY={1}
        >
            {children}
        </Box>
    );
};