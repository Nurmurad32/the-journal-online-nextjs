import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headingImg from "@/assets/logo.png"
import { getCurrentDateTime } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDateTime();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headingImg} width={350} height={100} alt='Logo' className='mx-auto'/>
                <Typography color="gray" variant="body1" textAlign="center" className='mt-1 mb-2'>
                    Journalism without Fear or Favour
                </Typography>
                <Typography textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;