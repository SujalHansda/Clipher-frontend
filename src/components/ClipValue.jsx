import React, { useEffect, useState } from 'react';


export default function ClipValue(clip_id) {
    const URL = `${process.env.R_DEPLOYED_URL}/${clip_id.clip_id}`;
    
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
