import { Box, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useAppDrawerContext } from "../../context/DrawerContext";


interface IListItemLink {
    to: string;
    icon: JSX.Element;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLink> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    //Set selected background
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton
            onClick={handleClick}
            selected={!!match}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label}>
            </ListItemText>
        </ListItemButton>
    );
};

interface ISideBarProps {
    children: React.ReactNode
}

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useAppDrawerContext();

    return (
        <>
            <Drawer
                variant={smDown ? "temporary" : "permanent"}
                open={isDrawerOpen}
                onClose={toggleDrawerOpen}
            >
                <Box
                    width={theme.spacing(isDrawerOpen ? 28 : 7)}
                    overflow='hidden'
                    height='100%'
                    display='flex'
                    flexDirection='column'>

                    {/* Menu Options */}
                    <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    to={drawerOption.path}
                                    label={isDrawerOpen ? drawerOption.label : "."}
                                    onClick={smDown ? toggleDrawerOpen : undefined} />
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>

            {/* Children Content */}
            <Box
                height='100%'
                marginLeft={smDown ? 0 :
                    isDrawerOpen ? theme.spacing(28) : theme.spacing(7)}
            >
                {children}
            </Box>
        </>
    );
};