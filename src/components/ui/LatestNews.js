import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';


import topNews from "../../assets/top-news.png"
import topNews2 from "../../assets/top-news2.png"
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';
import Link from 'next/link';

const LatestNews = async () => {
    const { data } = await getAllNews()

    return (
        <Box className="my-5">
            <Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`}>
                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[0].thumbnail_url} width={800} height={500} alt='top news' />
                        </CardMedia>
                        <CardContent>
                            <p className='w-[100px] bg-red-500 p-2 text-white my-3 rounded'>{data[0].category}</p>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography gutterBottom className='my-3'>
                                By {data[0].author.name} - {data[0].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>

            <Grid className='my-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(1, 7).map((news) => (
                        <Grid key={news._id} item xs={12} md={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: "100%",
                                                height: "250px"
                                            }
                                        }}>
                                            <Image src={news.thumbnail_url} width={800} height={500} alt='top news' />
                                        </CardMedia>
                                        <CardContent>
                                            <p className='w-[100px] bg-red-500 p-2 text-white my-3 rounded'>{news.category}</p>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {news.title}
                                            </Typography>
                                            <Typography gutterBottom className='my-3'>
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.details.length > 150 ? news.details.slice(0, 150) + "..." : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>

        </Box>
    );
};

export default LatestNews;