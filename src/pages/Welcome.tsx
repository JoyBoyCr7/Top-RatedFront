import { Outlet, Link } from 'react-router-dom'
import SimpleSlider from '../components/Slider'

function Welcome() {

    return (
      <>
      <SimpleSlider/>
      <div style={{marginTop:"3rem"}}>
      <Link to={"/signup"}> <button style={{backgroundColor: "red"}}>Signup</button></Link>
      <Link to={"/login"}> <button>login</button></Link>
      </div>
      <Outlet/>
      </>
    )
  }
  
  export default Welcome