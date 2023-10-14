import { Outlet, Link, Form} from "react-router-dom"



const Dashboard = () => {
    return <div>
         <Form action="/logout" method="post"> <button>logout</button></Form> 
        <h1> Your Dashboard</h1>
        <Link to="/dashboard/create">Create Show</Link>
        <Outlet/>

    </div>
}

export default Dashboard