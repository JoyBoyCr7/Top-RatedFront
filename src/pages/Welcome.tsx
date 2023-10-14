import { Outlet, Link } from 'react-router-dom'

function Welcome() {

    return (
      <>
      <h1>Welcome</h1>
      <Link to={"/signup"}> <button style={{backgroundColor: "red"}}>Signup</button></Link>
      <Link to={"/login"}> <button>login</button></Link>
      <Outlet/>
      </>
    )
  }
  
  export default Welcome