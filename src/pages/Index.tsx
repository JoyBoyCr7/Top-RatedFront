import { useLoaderData, Link, Form } from "react-router-dom"

// showName: String,  
    // yearWatched: String,
    // showImage : String, 
    // intrestLevel : Number,
    // wouldRecommend: Boolean,
    // Description : String, 
    // userName : String
interface showtype{
    showName : string
    yearWatched : string,
    showImage : string, 
    rating : number,
    wouldRecommend: boolean,
    description : string, 
    userName : string
    _id: string 
}

const Index = () => {
    const shows = useLoaderData() as showtype[]
    console.log(shows)
    return <div>
        <Form action="/logout" method="post"> <button>logout</button></Form> 
        <Link to="/dashboard/create">Create Show</Link>
        {shows.map((show) => <div>
            <Link to={`/dashboard/${show._id}`}><h1>{show.showName}</h1></Link>
            <h1>{show.showName}</h1>
        </div>)}
    </div>
}

export default Index