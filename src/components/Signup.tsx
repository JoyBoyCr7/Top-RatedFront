import { Form } from "react-router-dom"
const Signup = () => {
    return <Form action="/signup" method="post">
        <label>Username:<input type="text" name="userName" placeholder="Username"></input></label>
        <label>Password:<input type="password" name="password" placeholder="Password"></input></label>
        <input type="submit" />
    </Form>
}

export default Signup