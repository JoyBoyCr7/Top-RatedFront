import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { loginAction, signupAction, logoutAction} from "./actions";
import Dashboard from "./pages/Dashboard";
import { indexLoader } from "./loaders";
import Index from "./pages/Index";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="/signup" element={<Signup/>} action={signupAction}/>
        <Route path="/login" element={<Login/>} action={loginAction}/>
        <Route path="/logout" action={logoutAction}/>
        <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="create" element={<h1></h1>}/>
            <Route path=":id/" element={<h1>Show</h1>}>
                <Route path="update" element={<h1>index</h1>}/>
                <Route path="delete" element={<h1>index</h1>}/>
            </Route>

        </Route>
    </Route>
))

export default router