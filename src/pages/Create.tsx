import { Form } from "react-router-dom"
const Create = () => {
    return <Form action="/dashboard/create" method="post">
        <label>showName:<input type="text" name="showName" placeholder="Username"></input></label>
        <label>yearWatched:<input type="text" name="yearWatched" placeholder="Username"></input></label>
        <label>showImage:<input type="text" name="showImage" placeholder="Username"></input></label>
        <label>Rating:<input type="number" name="rating" placeholder="Username"></input></label>
        <label>wouldRecommend:<input type="checkbox" name="wouldRecommend" placeholder="Username"></input></label>
        <label>description:<input type="text" name="description" placeholder="Username"></input></label>
        <input type="submit" />
    </Form>
}

export default Create