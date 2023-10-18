import { Form } from "react-router-dom"
const Login = () => {
    return <Form action="/login" method="post" className="form">
        <p className="heading" style={{paddingBottom:"0px"}}>Login</p>
        <input type="text" name="userName" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="submit" className="btn"/>
    </Form>
}

export default Login