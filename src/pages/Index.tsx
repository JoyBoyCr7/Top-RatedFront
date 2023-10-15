import { useLoaderData, Link } from "react-router-dom"
import ShowCard from "../components/Cards"
// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// showName: String,  
    // yearWatched: String,
    // showImage : String, 
    // intrestLevel : Number,
    // wouldRecommend: Boolean,
    // Description : String, 
    // userName : String
interface showtype{
    showName: string
    yearWatched: string,
    showImage : string, 
    intrestLevel : number,
    wouldRecommend: boolean,
    description : string, 
    userName : string,
    _id: string
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const Index = () => {
    const shows = useLoaderData() as showtype[]
    console.log(shows)
    return <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} display="flex"
    justifyContent="center"
    alignItems="center">
            
        {shows.map((show) => 
            <Grid xs={3} sm={3} md={3} m={1} >
            <Link to={`/dashboard/${show._id}`}> <ShowCard show={show}/></Link>
            </Grid>
        )}
        
    </Grid>
   
}

// {shows.map((show) => <div key={show._id}>
//             <h1>{show.showName}</h1>
//             <Link to={`/dashboard/${show._id}`}><div><ShowCard show={show}/></div></Link>
//         </div>)}
export default Index