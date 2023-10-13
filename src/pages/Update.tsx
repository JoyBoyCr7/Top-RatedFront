import { Form, useLoaderData } from "react-router-dom"

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


const Update = () => {
    const show = useLoaderData() as showtype
    return <Form action={`/dashboard/${show._id}/update`} method="post">
        <label>showName:<input type="text" name="showName" placeholder="Username"></input></label>
        <label>yearWatched:<input type="text" name="yearWatched" placeholder="Username"></input></label>
        <label>showImage:<input type="text" name="showImage" placeholder="Username"></input></label>
        <label>Rating:<input type="number" name="rating" placeholder="Username"></input></label>
        <label>wouldRecommend:<input type="checkbox" name="wouldRecommend" placeholder="Username"></input></label>
        <label>description:<input type="text" name="description" placeholder="Username"></input></label>
        <button></button>
    </Form>
}

export default Update