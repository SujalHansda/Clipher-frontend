import "../styles.scss"
import Head from "../components/Head"
import { useLocation, useNavigate } from 'react-router-dom';


export default function Submitted() {

    const location = useLocation();
    const navigate = useNavigate();
    let status
    try {
        const data = location.state;
        const link = `http://localhost:5173/${data.clip_id}`
        status = `Clipboard is generated. You can access it with this link : ${link}`
    } catch (error) {
        status = "Something went wrong"
    }
    
    
    return (
        <>
            <Head />
            <p> {status} </p>
        </>
    )
}