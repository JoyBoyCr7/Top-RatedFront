import { Outlet, Link} from "react-router-dom"



const Dashboard = () => {
    return <div>
        <h1> Your Dashboard</h1>
        <Link to="/dashboard/create">Create Show</Link>
        <Outlet/>

    </div>
}

export default Dashboard