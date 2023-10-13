import { useLoaderData, Link, Form, Outlet } from "react-router-dom"

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

const Show = () => {
    const show = useLoaderData() as showtype;
    console.log(show)
    return <div>
        <h2>{show.showName}</h2>
        <p>{show.description}</p>
        <h2>{show.yearWatched}</h2>
        <Link to={`/dashboard/${show._id}/update`}><button>Update</button></Link>
        <Outlet/>
        <Form action={`/dashboard/${show._id}/delete`} method="post"><button>Delete</button></Form>
    </div>
}

export default Show