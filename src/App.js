import React, {useState, useEffect} from "react"

const useFetch = url =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        setData(item);
        setLoading(false);
    }, []); 

    return {data, loading};
}

export default () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch("https://api.randomuser.me/");

    return(
        <div>
            <p>Your count is {count}</p>
            <button onClick = {() => setCount(prevCount => prevCount+1)}>Click Here</button>
            {loading ? <div>loading...</div> : <div>{data.name.first}</div>}
        </div>
    )
}