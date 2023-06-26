import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled as Styled, alpha } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const drawerWidth = 200;

const StyledInputBase = Styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


const Search = Styled('div')(({ theme }) => ({
    position: 'relative',
    border:'1px solid grey',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: '"rgb(28, 37, 54)"',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = Styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export default function ResponsiveDrawer(props: Props) {
    const { children } = props;


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img src="https://haix.ai/images/HaiX_white_logo.png" style={{ padding:'1vh', margin:'1vh', width:'-webkit-fill-available'}}/>
      <Divider />
      <List sx={{color:'white'}}>

          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <EqualizerIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <PeopleIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <StoreIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Company" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <AccountBalanceWalletIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List sx={{color:'white', position:'absolute', bottom:'0px', width:'-webkit-fill-available'}}>
          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <SettingsIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <LoginIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{'&:hover': {
      backgroundColor: '#757575',
    }}}>
            <ListItemButton>
              <ListItemIcon>
                    <AppRegistrationIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"rgba(255, 255, 255, 0.8)",
          boxShadow:'none',
          backdropFilter:'blur(6px)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:'black'}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MailIcon sx={{color:"grey"}}/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <NotificationsIcon sx={{color:"grey"}}/>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <AccountCircle sx={{color:"grey"}}/>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "rgb(28, 37, 54)" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "rgb(28, 37, 54)" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, padding:'2vh' }}
      >
        <Toolbar />
       {children}
       </Box>
    </Box>
  );
}