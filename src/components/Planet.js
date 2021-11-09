import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import axios from "axios"

const Planet = () =>{
    const [starWars, setStarWars] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res=>{ setStarWars(res.data.results)})
        .catch(err => {console.error(err)})
    }, []);


    return(
        <>
            <h2>{starWars.name}</h2>
            <p>{starWars.height}</p>
        </>
    )
}

export default Planet
