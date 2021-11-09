import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import axios from "axios"

const People = () =>{
    const [starWars, setStarWars] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res=>{ setStarWars(res.data)
        console.log(res)})
        .catch(err => {console.error(err)})
    }, [id]);
// .then(res=>{
    // setPlanet(res.data)
    // console.log('res: ',res)
    // })


    return(
        <div className="starWars">
            <h2>{starWars.name}</h2>
            <p>Height: {starWars.height}</p>
            <p>Mass: {starWars.mass}</p>
            <p>Hair Color: {starWars.hair_color}</p>
            <p>Skin Color: {starWars.skin_color}</p>
        </div>
    )
}

export default People

