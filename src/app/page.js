import LatestNews from "@/components/ui/LatestNews";
import SideBar from "@/components/ui/SideBar";
import { Button, Grid } from "@mui/material";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <LatestNews />
        </Grid>
        <Grid item md={4} className="hidden md:block">
          <SideBar />
        </Grid>
        <Button variant="contained"  color="error" sx={{display:"flex",justifyContent:"center"}} className='mx-auto my-5'>
                <Link href={"/categories/news?category=all-news"}>
                    Load More
                </Link>
            </Button>
      </Grid>
    </>
  );
};

export default HomePage;