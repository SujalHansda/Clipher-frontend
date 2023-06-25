import Head from "../components/Head";
import ClipValue from "../components/ClipValue";
import { useParams } from "react-router-dom";

export default function Clip() {
    const {clip_id} = useParams()
    return(
        <>
        <Head />
        <ClipValue clip_id = {clip_id}/>
        </>
    )

}