import { Outlet, Link, Form} from "react-router-dom"



const Welcome = () => {
    return <div>
    <Link to={"/signup"}> <button style={{backgroundColor: "red"}}>Signup</button></Link>
    <Link to={"/login"}> <button>login</button></Link>
    <Form action="/logout" method="post"> <button>logout</button></Form> 
    </div>
}

export default Welcome