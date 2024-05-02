import { getAllCategories } from '@/utils/getAllCategories';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { getCategoryNews } from '@/utils/getCategoryNews';
import Image from 'next/image';
import Link from 'next/link';

const DynamicNewsPage = async ({ params, searchParams }) => {

    const { data } = await getCategoryNews(searchParams.category)

    return (
        <div className='mt-5'>
            <h1>Dynamic News Page {searchParams.category}</h1>

            <Grid className='my-5' container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
                {
                    data.map(news => (
                        <Grid key={news.id} item xs={12} md={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: "100%",
                                                height: "250px"
                                            }
                                        }}>
                                            <Image src={news.thumbnail_url} width={800} height={200} alt='top news' />
                                        </CardMedia>
                                        <CardContent>
                                            <span className=' bg-red-500 p-1 text-white my-3 rounded'>{news.category}</span>
                                            <Typography gutterBottom className='mt-2' variant='h6'>
                                                {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                            </Typography>
                                            <Typography gutterBottom className='my-1' variant='body2'>
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default DynamicNewsPage;