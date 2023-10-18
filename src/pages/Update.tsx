import { Form, useLoaderData } from "react-router-dom"
import { useState } from "react"
import Finalstar from "../components/Finalstar"

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

    const [isChecked, setIsChecked] = useState(false);

  const CheckboxChange = () => {
    setIsChecked(!isChecked); 
  };


    const show = useLoaderData() as showtype
    function worker(){
        console.log(show)
    }
    console.count
    console.log(show)
    console.count
    const initialRating = show.rating
    const [rating, setRating] = useState(initialRating)
    const changeRating = (newRating:any) => {
    setRating(newRating);
  };
    return <Form action={`/dashboard/${show._id}/update`} method="post">
    <div className="form">
    <div className="group">
    <input type="text" name="showName" placeholder="‎" defaultValue={show.showName}></input>
      <label >ShowName</label>
      </div>
      <div className="group">
      <input type="date" name="yearWatched" placeholder="‎" defaultValue={show.yearWatched}></input>
      <label >Year Watched</label>
    </div>
    <div className="group">
    <input type="text" name="rating" placeholder="‎"  style={{display: 'none'}} value={rating ? rating: '0' } readOnly={true}></input>
      </div>

  <div className="group">
      <input placeholder="‎" type="text" id="email" name="showImage" defaultValue={show.showImage} required/>
      <label >Show image</label>
      </div>
  <div className="group">
      <textarea placeholder="‎" id="comment" name="description" defaultValue={show.description}  required></textarea>
      <label >Description</label>
  </div>


  <div className="group" style={{color:"black" , display:"flex"}} >
    <label>Would Recommend: <input type="checkbox"  checked={isChecked} style={{ all: "revert"}}
        onChange={CheckboxChange} placeholder="‎"></input></label>
    </div>

    <div className="group">
    <input type="text" name="wouldRecommend" placeholder="‎"  style={{display: 'none'}} value={`${isChecked}`} readOnly={true}></input>
      </div>

  <Finalstar changeRating={changeRating} rating={rating}/>
      <button type="submit" onClick={worker}>Update Show</button>
    </div>
  </Form>
  
    // <Form action={`/dashboard/${show._id}/update`} method="post">
    //     <label>showName:<input type="text" name="showName" placeholder="Username" defaultValue={show.showName}></input></label>
    //     <label>yearWatched:<input type="text" name="yearWatched" placeholder="Username"></input></label>
    //     <label>showImage:<input type="text" name="showImage" placeholder="Username"></input></label>
    //     <label>Rating:<input type="number" name="rating" placeholder="Username"></input></label>
    //     <label>wouldRecommend:<input type="checkbox" name="wouldRecommend" placeholder="Username"></input></label>
    //     <label>description:<input type="text" name="description" placeholder="Username"></input></label>
    //     <button>Update Show</button>
    // </Form>
}

export default Update