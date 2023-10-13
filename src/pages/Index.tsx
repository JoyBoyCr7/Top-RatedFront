import { useLoaderData, Form, Link } from "react-router-dom"

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
    Description : string, 
    userName : string,
    _id: string
}

const Index = () => {
    const shows = useLoaderData() as showtype[]
    console.log(shows)
    return <div>
        <Form action="/logout" method="post"> <button>logout</button></Form> 
       
        {shows.map((show) => <div>
            <h1>{show.showName}</h1>
            <Link to={`/dashboard/${show._id}`}><h1>{show.showName}</h1></Link>
        </div>)}
    </div>
}

export default Index