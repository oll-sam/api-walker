import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import axios from "axios"

const Planet = () =>{
    const [starWars, setStarWars] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res=>{ setStarWars(res.data)})
        .catch(err => {console.error(err)})
    }, [id]);


    return(
        <div className="starWars">
            <h2>Name: {starWars.name}</h2>
            <p>Climate: {starWars.climate}</p>
            <p>Terrain: {starWars.terrain}</p>
            <p>Population: {starWars.population}</p>
            <p>Surface Water: {starWars.surface_water}</p>
        </div>
    )
}

export default Planet
