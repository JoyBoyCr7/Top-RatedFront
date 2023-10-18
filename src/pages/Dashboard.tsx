import { Outlet, Link, Form} from "react-router-dom"
import { FaTv } from "react-icons/fa";

document.getElementById("root")?.setAttribute("style", "padding: 0pc;")


const Dashboard = () => {
    return <div>
        
        <nav> <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> <h1><Link to={"/dashboard"}> <FaTv/></Link> </h1> <div style={{display:"flex"}}> <Link to="/dashboard/create"><button style={{color:"black", background:"rgb(249, 246, 238)"}}>Create Show</button></Link>  <Form action="/logout" method="post"> <button >logout</button></Form> </div> </div> </nav>
        
        <Outlet/>

    </div>
}

export default Dashboard