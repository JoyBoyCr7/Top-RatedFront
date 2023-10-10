import url from "./url";
import { redirect } from "react-router-dom";

interface Reqtype {
    formData?: any;
}

export const signupAction = async ({request}: {request: Reqtype}) => {
    const formData = await request.formData()

    const user = {
        userName: formData.get("userName"),
        password: formData.get("password")
    }
    console.log(user)
    const response = await fetch(url + "/auth/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (response.status === 400){
        alert("Could not signup, please try again")
        return redirect("/signup")
    }
    alert("Wellsome to TopRated!")
    return redirect("/login")
}


export const loginAction = async ({request}: {request: Reqtype}) => {
    const formData = await request.formData()

    const user = {
        userName: formData.get("userName"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/login", {
        method: "post",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (response.status === 400){
        alert("Could not login, please try again")
        return redirect("/login")
    }

    return redirect("/Dashboard")
}

export const logoutAction = async () => {
    const response = await fetch(url + "/auth/logout", {
        method: "get",
    })
    if (response.status > 400){
        alert("Could not log out, please try again")
        return redirect("/dashboard")
    }

    return redirect("/")
}