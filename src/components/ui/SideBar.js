import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import sideTopImg from "@/assets/side-top-news.png"
import sideBotImg from "@/assets/side-bottom-img.png"
import { getAllNews } from '@/utils/getAllNews';
import Link from 'next/link';

const SideBar = async () => {
    const { data } = await getAllNews()
    return (
        <>
            <Box className="my-5">
                <Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={data[11].thumbnail_url} width={800} height={500} alt='top news' />
                            </CardMedia>
                            <CardContent>
                                <p className='w-[100px] text-xs bg-red-500 p-2 text-white my-3 rounded'>{data[11].category}</p>
                                <Typography gutterBottom variant="h5" component="div" className='text-base font-semibold md:text-lg'>
                                    {data[11].title}
                                </Typography>
                                <Typography gutterBottom className='my-3'>
                                    By {data[11].author.name} - {data[11].author.published_date}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Box>
            {
                data.slice(5, 10).map((news) => (
                    <Box key={news.id} sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                            <Grid container wrap="nowrap" spacing={2} className='py-4'>
                                <Grid item>
                                    <Image src={news.thumbnail_url} width={60} height={100} alt='top news' className='rounded' />
                                </Grid>
                                <Grid item xs>
                                    <Typography > {news.title}</Typography>
                                    <Typography variant='body2' color="gray"> By {news.author.name} - {news.author.published_date}</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                        <hr />
                    </Box>
                ))
            }

            <Box className="py-5">
                <Image src={sideBotImg} width={800} alt='top news' className='rounded' />
            </Box>
        </>
    );
};

export default SideBar;