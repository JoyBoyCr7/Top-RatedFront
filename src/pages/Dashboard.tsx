import { Outlet, Link, Form} from "react-router-dom"



const Dashboard = () => {
    return <div>
        <nav> <h1 style={{display:"flex", justifyContent:"center"}}> Your Dashboard</h1> <Form action="/logout" method="post"> <button>logout</button></Form> </nav>
        <Link to="/dashboard/create">Create Show</Link>
        <Outlet/>

    </div>
}

export default Dashboard