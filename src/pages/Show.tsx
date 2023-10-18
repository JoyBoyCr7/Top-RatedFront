import { useLoaderData, Link, Outlet, Form } from "react-router-dom"

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
    console.log("here1")
    console.log(show);
  
    function handleUpdateClick() {
      const target = document.getElementById("showdiv");
      if (target) {
        target.style.display = "flex";
      }
    }
  
    return (
      <div className="showdiv" id="showdiv" style={{gap:"40px"}}>
        <div className="card">
            <div className="card-image" style={{backgroundImage:`url(${show.showImage})`}} ></div>
            <p className="card-title" style={{textAlign:"left"}}>{show.showName}</p>
            <p className="card-body" style={{textAlign:"left"}}>
                {show.description}
            </p>
            <p className="footer" style={{textAlign:"right"}}>Finished <span className="date">{show.yearWatched}</span></p>
            <Link to={`/dashboard/${show._id}/update`}>
            <button onClick={handleUpdateClick}>Update</button>
          </Link>
          <Form action={`/dashboard/${show._id}/delete`} method="post"><button>Delete</button></Form>
        </div>
        {/* <div>
          <Link to={"/dashboard"}>
            <button>Home</button>
          </Link>
          <h2>{show.showName}</h2>
          <p>{show.description}</p>
          <h2>{show.yearWatched}</h2>
          <Link to={`/dashboard/${show._id}/update`}>
            <button onClick={handleUpdateClick}>Update</button>
          </Link>
        </div> */}
        <Outlet />
      </div>
    );
  }
  


export default Show