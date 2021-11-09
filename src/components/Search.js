import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { useHistory} from 'react-router-dom'

const Search = () =>{
    const [option, setOption] = useState("");
    const [id, setId] = useState("");
    const [starWars, setStarWars] = useState([]);
    const history = useHistory();
    const {name} = useParams();

    const getStarWars = (e) => {
        e.preventDefault()
        history.push(`/${option}/${id}`);
    }

    return(
    <form className="starWars" onSubmit={getStarWars}>
        <label>Search for:</label>
        <select onChange={(e) => setOption(e.target.value)}>
        <option value="select Resource" selected disabled hidden>Select Resource</option>
        <option value="people">People</option>
        <option value="planets">Planet</option>
        </select>
        <label className="stars">ID:</label>
        <input type="text" onChange={(e) => setId(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
    )
}




export default  Search
