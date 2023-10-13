import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { loginAction, signupAction, logoutAction, createAction} from "./actions";
import Dashboard from "./pages/Dashboard";
import { indexLoader, showLoader } from "./loaders";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Show from "./pages/Show";
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="/signup" element={<Signup/>} action={signupAction}/>
        <Route path="/login" element={<Login/>} action={loginAction}/>
        <Route path="/logout" action={logoutAction}/>
        <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="create" element={<Create/>} action={createAction}/>
            <Route path=":id/" element={<Show/>} loader={showLoader}>
                <Route path="update" element={<h1>index</h1>}/>
                <Route path="delete" element={<h1>index</h1>}/>
            </Route>

        </Route>
    </Route>
))

export default router