import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, Menu } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const NavBar = ({ drawerWidth = 280 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton sx={{ display: { sm: 'none' } }}>
                    <Menu sx={{ color: 'white' }} />
                </IconButton>

                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography noWrap component="div">
                        Journal App
                    </Typography>

                    <IconButton onClick={onLogout}>
                        <LogoutOutlined sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
