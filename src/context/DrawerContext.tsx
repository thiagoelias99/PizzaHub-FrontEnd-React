import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOption {
    icon: string
    path: string;
    label: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOption[];
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

export const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
    //Options lines
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    //Drawer status
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    //Open/Close Drawer
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    //Options Change Function
    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider
            value={{
                isDrawerOpen,
                drawerOptions,
                toggleDrawerOpen,
                setDrawerOptions: handleSetDrawerOptions
            }}>
            {children}
        </DrawerContext.Provider>
    );
};