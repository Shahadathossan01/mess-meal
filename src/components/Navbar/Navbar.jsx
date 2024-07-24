
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Chip } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';
const Navbar=()=>{
  const {allHistoryData}=useStoreState(state=>state.history)
  const {fetchHistory}=useStoreActions(action=>action.history)
    useEffect(()=>{
      fetchHistory()
    },[])
    const {user}=useStoreState(state=>state.user)

    const {logoutUser}=useStoreActions(action=>action.user)
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
if(allHistoryData.length==0){
  return
}
  return (
    <AppBar position="static" style={{marginTop:'-8px'}}>
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
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/user details' style={{color:'black',textDecoration:'none'}}>
                   <Typography textAlign="center">
                    User Details
                   </Typography>
                  </Link>
                </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/Grocery Cost' style={{color:'black',textDecoration:'none'}}>
                   <Typography textAlign="center">
                    Grocery Cost
                   </Typography>
                  </Link>
                </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/history' style={{color:'black',textDecoration:'none'}}>
                   <Typography textAlign="center">
                    History  <span style={{color:'red'}}>{allHistoryData?.data.length}</span>
                   </Typography>
                  </Link>
                </MenuItem>
                {
                  user?<MenuItem onClick={()=>{handleCloseNavMenu,logoutUser()}}>
                   <Typography textAlign="center">
                    Logout
                   </Typography>
                </MenuItem>:
                  <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/login' style={{color:'black',textDecoration:'none'}}>
                   <Typography textAlign="center">
                    Login
                   </Typography>
                  </Link>
                </MenuItem>
                }
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/register' style={{color:'black',textDecoration:'none'}}>
                   <Typography textAlign="center">
                    Register
                   </Typography>
                  </Link>
                </MenuItem>
              <Box sx={{textAlign:'center',display:'block'}}>
                {
                  user?.user.admin&&<Link style={{textDecoration:'none',color:'black'}} to='/admin'>
                  <Button >Admin</Button>
                  </Link>
                }
                {
                  (!user?.user.admin)&&(user?.user)&&<Link style={{display:'flex',justifyContent:'center'}} to='/user'>
                  <><AccountCircleIcon sx={{color:'black',my:2}}></AccountCircleIcon></>
                  </Link>
                }
                {
                  user&&<Chip label={user?user?.user?.username:''}color='success' />
                }
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
              <Link to='/user details'  style={{textDecoration:'none'}}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                  user details
                  </Button>
              </Link>
              <Link to='/grocery cost' style={{textDecoration:'none'}}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                  Grocery cost
                  </Button>
              </Link>
              <Link to='history' style={{textDecoration:'none'}}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                  History <span style={{color:'red'}}>{allHistoryData.data.length}</span>
                  </Button>
              </Link>
              {
                user?<Button
                onClick={()=>{handleCloseNavMenu,logoutUser()}}
                sx={{ my: 2, color: 'white', display: 'block' }}>
              Logout
              </Button>
              :
                <Link to='/login'  style={{textDecoration:'none'}}>
                <Button
                  onClick={()=>{handleCloseNavMenu,logoutUser()}}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                Login
                </Button>
            </Link>
              
              }
              <Link to='register' style={{textDecoration:'none'}}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                  Register
                  </Button>
              </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {
                  user?.user.admin&&<Link to='/admin'>
                  <Button sx={{color:'white',my:2}}>
                  Admin
                  </Button>
              </Link>
              }
              </Box>
              {
                (!user?.user.admin)&&(user?.user)&&<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/user'>
                  <AccountCircleIcon sx={{color:'white',my:2}}></AccountCircleIcon>
                  </Link>
                  </Box>
              }
                
          
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex',marginTop:'-5px'} }}>
                {
                  user&&<Chip label={user?user?.user?.username:''}color='success' />
                }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
