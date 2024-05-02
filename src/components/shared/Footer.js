"use client"
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const Footer = () => {
    const navItems = [
        { route: "Home", pathname: "/" },
        { route: "Pages", pathname: "/pages" },
        { route: "Category", pathname: "/category" },
        { route: "News", pathname: "/news" },
        { route: "About", pathname: "/about" },
        { route: "Contact", pathname: "/contact" },
    ]

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box
                    className="w-full text-center"
                    sx={{
                        "& svg": {
                            color: "white"
                        }
                    }}>
                    <IconButton > <FacebookIcon /> </IconButton>
                    <IconButton > <TwitterIcon /> </IconButton>
                    <IconButton > <YouTubeIcon /> </IconButton>
                    <IconButton > <LinkedInIcon /> </IconButton>
                    <IconButton > <InstagramIcon /> </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography color="gray" variant="body2" textAlign="center">
                    @2024 The Journal Online. Designed by Nur
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;