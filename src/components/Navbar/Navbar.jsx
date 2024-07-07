import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import{filterPages} from '../../utils/index'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Chip } from '@mui/material';
import { useStoreState } from 'easy-peasy';
const Navbar=()=>{
    const {user}=useStoreState(state=>state.user)
    console.log(user.user.username)
    const pages = ['User Details','Grocery cost','History','Login','Logout','Register'];
    const newPage=filterPages(pages,user)//!Filter pages array.When user login then show logout button and when user logout then show login button. 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar style={{padding:'10px 0px 0px 0px'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{color:'white'}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Link style={{color:'white',textDecoration:'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mess Meal
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {newPage.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link style={{color:'black',textDecoration:'none'}} to={page}>
                   <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <Box sx={{textAlign:'center',display:'block'}}>
                <Link style={{textDecoration:'none',color:'black'}} to='/admin'>
                    <Button >Admin</Button>
                </Link><br />
                <Link style={{display:'flex',justifyContent:'center'}} to='/user'>
                <><AccountCircleIcon sx={{color:'black',my:2}}></AccountCircleIcon></>
                </Link>
                <Link to='/user'><Button><Chip label={user?user?.user?.username:''}color='success' /></Button></Link>
              </Box>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={{color:'white',textDecoration:'none'}}>
                Mess Meal
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {newPage.map((page) => (
              <Link to={page} style={{textDecoration:'none'}} key={page}>
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0.5, display: { xs: 'none', md: 'flex'} }}>
                <Link to='/admin'>
                    <Button sx={{color:'white',my:2}}>
                    Admin
                    </Button>
                </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/user'>
                <AccountCircleIcon sx={{color:'white',my:2}}></AccountCircleIcon>
                </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex',marginTop:'-5px'} }}>
                <Link to='/user'><Button><Chip label={user?user?.user?.username:''}color='success' /></Button></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
