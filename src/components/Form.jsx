import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const navigate = useNavigate();

    const [newClip, setNewClip] = useState({ clip_id: "", description: "" })


    function updateClipId(e) {
        setNewClip({ ...newClip, clip_id: e.target.value })
        console.log(e.target.value)
    }
    function updateDescription(e) {
        setNewClip({ ...newClip, description: e.target.value })
        console.log(e.target.value)
    }
    async function handleOnSubmit(e) {
        e.preventDefault()
        try { // /create/:clip_id
            const response = await fetch(`https://clipher-backend.onrender.com/create/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newClip)
            })
            console.log(response)
            if (response.status === 200) { 
                navigate('/created', { state: { clip_id: newClip.clip_id } }) 
            }
        } catch (err) {
            console.log(err.message)
            navigate('/error')
        }
    }

    return (
        <form className="flex-column" onSubmit={handleOnSubmit} >
            <label htmlFor="clip_id">Clip_id <span className="subscript">[should be less than 20 charcters]</span> </label>
            <input type="text" id="clip_id" onChange={updateClipId} />
            <br />
            <label htmlFor="description">Write here <span className="subscript">[should be less than 2000 charcters]</span> </label>
            <textarea id="description" rows="5" cols="60" onChange={updateDescription}></textarea>
            <button>Create</button>
        </form>
    )
}
