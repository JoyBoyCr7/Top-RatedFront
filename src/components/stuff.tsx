interface Stuffprops{
    word: string,
    cheese?: string,
    somthing?: string|number
}
export default function Stuff(props: Stuffprops){
    return <div>
        <h1> {props.word}</h1>
        {props.somthing ? props.somthing: "no"}
        {props.cheese ? props.cheese: "no cheese"}
    </div>
}