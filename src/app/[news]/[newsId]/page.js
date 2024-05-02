import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);

    return (
        <Box className="my-5">
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt='News image' />

                        <Grid container spacing={2} className='mt-3'>
                            <Grid item md={6}>
                                <Image src={news.image_url} width={800} height={500} alt='News image' />
                            </Grid>
                            <Grid item md={6}>
                            <Image src={news.image_url} width={800} height={500} alt='News image' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant='h5' component="h2">{news.title}</Typography>
                        <Box sx={{
                            display: 'flex',
                            gap:3,
                            alignItems: 'center',
                        }}>
                            <Avatar src={news.author.img} alt='author img' />
                            <Typography >By {news.author.name}</Typography>
                            <Typography > - {news.author.published_date}</Typography>
                        </Box>
                        <Typography style={{textAlign:"justify", whiteSpace:"pre-line", margin:"10px 0", color:"gray"}}>{news.details}</Typography>

                        {/* <Typography > - {news.author.published_date}</Typography> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;