import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppRoutes from "./routes/AppRoutes";
import { DrawerContext, DrawerProvider } from "./context/DrawerContext";
import { SideBar } from "./components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <DrawerProvider>
                <BrowserRouter>
                    <SideBar>
                        <AppRoutes />
                    </SideBar>
                </BrowserRouter>
            </DrawerProvider>
        </ThemeProvider>
    );
}

export default App;
