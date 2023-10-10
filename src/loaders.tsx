import url from "./url";

export const indexLoader = async () => {
    const response = await fetch(url + "/show", {
        credentials: "include",
    })
    const show = await response.json()
    return show
}