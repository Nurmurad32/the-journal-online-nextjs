import CategoryList from '@/components/ui/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <CategoryList />
                    </Grid>
                    <Grid item xs={12} md={9}>
                    {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;