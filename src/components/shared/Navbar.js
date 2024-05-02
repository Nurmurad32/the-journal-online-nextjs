"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '@mui/material';

import logo from "@/assets/logo.png";

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const pages = ['Products', 'Pricing', 'Blog'];

const navItems = [
    { route: "Home", pathname: "/" },
    { route: "Category", pathname: "/categories/news?category=all-news" },
    { route: "News", pathname: "/categories/news?category=all-news" },
    // { route: "About", pathname: "/about" },
    // { route: "Contact", pathname: "/contact" },
]


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Image src={logo} width={100} height={100} alt='Website logo' />
                    </Box> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
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
                            {navItems.map((item) => (
                                <MenuItem key={item} onClick={handleCloseNavMenu}>
                                    <Link href={item.pathname}>{item.route}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Image src={logo} width={100} height={100} alt='Website logo' />
                    </Box> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='justify-left '>
                        {navItems.map((item) => (
                            <MenuItem key={item} >
                                <Link href={item.pathname} >
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                                        {item.route}
                                    </Button>
                                </Link>
                            </MenuItem>
                        ))}
                    </Box>

                    <Box >
                        <Stack direction="row" sx={{
                            "& svg": {
                                color: "white"
                            }
                        }}>
                            <IconButton > <FacebookIcon /> </IconButton>
                            <IconButton > <TwitterIcon /> </IconButton>
                            <IconButton > <YouTubeIcon /> </IconButton>
                            <IconButton > <LinkedInIcon /> </IconButton>
                            <IconButton > <InstagramIcon /> </IconButton>
                        </Stack>
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
