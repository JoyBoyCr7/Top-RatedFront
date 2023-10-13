import url from "./url";

export const indexLoader = async () => {
    const response = await fetch(url + "/show", {
        credentials: "include",
    })
    const show = await response.json()
    return show
}

export const showLoader = async ({params} : {params: any}) => {
    const id = params.id

    const response = await fetch(url + `/show/${id}`, {
        credentials: "include"
    })
    const show =  await response.json()

    return show
}
