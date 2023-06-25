import React, { useEffect, useState } from 'react';

export default function ClipValue(clip_id) {
    const URL = `http://localhost:5000/${clip_id.clip_id}`;
    
    const [value, setValue] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            const data = await result.json();
            if(data.message === undefined ) //means the data is there
            {
                setValue(data);
            }else{
                setValue({description: data.message});
            }
        }
        fetchData();
    }, [])


    // console.log(value)
    return (
        <div>
            <p>{value.description}</p>
        </div>
    )
}


// const getDesc = () => {
//     const response =  fetch(`http://localhost:5000/${temp}`);
//     const jsonData =  response.json();
//     return jsonData;
// }