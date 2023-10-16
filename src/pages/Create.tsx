import { Form } from "react-router-dom"
import StarRating from "../components/Stars"
import { useState } from "react"
const Create = () => {
    const [rating, setRating] = useState<number | null>(null)
  const changeRating = (newRating:any) => {
    setRating(newRating);
  };
    return <Form action="/dashboard/create" method="post">
    <div className="form">
    <div className="group">
    <input type="text" name="showName" placeholder="‎"></input>
      <label >ShowName</label>
      </div>
      <div className="group">
      <input type="date" name="yearWatched" placeholder="‎"></input>
      <label >Year Watched</label>
    </div>
    {/* <div className="group">
    <input type="text" name="rating" placeholder="‎" value={rating}></input>
      <label >Rating</label>
      </div> */}
    <div className="group">
    <input type="text" name="wouldRecommend" placeholder="‎"></input>
      <label >Would recomend</label>
    </div>
  <div className="group">
      <input placeholder="‎" type="text" id="email" name="showImage" required/>
      <label >Show image</label>
      </div>
  <div className="group">
      <textarea placeholder="‎" id="comment" name="description"  required></textarea>
      <label >Description</label>
  </div>
  <StarRating changeRating={changeRating} rating={rating}/>
      <button type="submit">ADD Show</button>
    </div>
  </Form>
    
}

export default Create

// <Form action="/dashboard/create" method="post">
    //     <label>showName:<input type="text" name="showName" placeholder="Username"></input></label>
    //     <label>yearWatched:<input type="text" name="yearWatched" placeholder="Username"></input></label>
    //     <label>showImage:<input type="text" name="showImage" placeholder="Username"></input></label>
    //     <label>Rating:<input type="number" name="rating" placeholder="Username"></input></label>
    //     <label>wouldRecommend:<input type="checkbox" name="wouldRecommend" placeholder="Username"></input></label>
    //     <label>description:<input type="text" name="description" placeholder="Username"></input></label>
    //     <input type="submit" />
    // </Form>