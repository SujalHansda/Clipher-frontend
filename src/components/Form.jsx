import React, { useState } from 'react'
export default function Form() {
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
            const response = await fetch(`http://localhost:5000/create/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newClip)
            })
            // console.log("-------------")
            console.log(response)
        } catch (err) {
            console.log(err.message)
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

// return (
//     <div className="flex-column ">
//         <label for="title">Title <span className="subscript">[should be less than 20 charcters]</span> </label>
//         <input type="text" id="title" />
//         <br />
//         <label for="description">Write here <span className="subscript">[should be less than 2000 charcters]</span> </label>
//         <textarea id="description" rows="5" cols="60"></textarea>
//         <button>Create</button>
//     </div>
// )