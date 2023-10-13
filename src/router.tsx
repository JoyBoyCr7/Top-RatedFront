import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { loginAction, signupAction, logoutAction, createAction, updateAction, deleteAction} from "./actions";
import Dashboard from "./pages/Dashboard";
import { indexLoader, showLoader } from "./loaders";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Update from "./pages/Update";
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="/signup" element={<Signup/>} action={signupAction}/>
        <Route path="/login" element={<Login/>} action={loginAction}/>
        <Route path="/logout" action={logoutAction}/>
        <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="create" element={<Create/>} action={createAction}/>
            <Route path=":id/" element={<Show/>} loader={showLoader}>
                <Route path="update" element={<Update/>} action={updateAction} loader={showLoader}/>
                <Route path="delete" action={deleteAction}/>
            </Route>

        </Route>
    </Route>
))

export default router