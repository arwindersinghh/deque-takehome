import { useState, useEffect } from "react";
import axios from "axios";
import './Table.css'
import SingleChar from './SingleChar';
import Button from 'react-bootstrap/Button'


const Table = () => {
  const [characters, setCharacters] = useState([]);
  const [char, setChar] = useState(false); //used when we click a character in our table
  const [sort, setSort] = useState("ASC");  

//used to select a specific column to filter by
  const [category, setCategory] = useState("name")
  


  const url = `/api/characters/?format=JSON&api_key=${process.env.REACT_APP_API_KEY}`;

//destructuring what we need from giantbomb API to our local state
  useEffect(() => {
    axios.get(url).then(({ data: { results } }) => setCharacters(results));
  }, []);

//Handling the sorting based on columns and direction (alphabetically or numerically)
  const handleSort = () => {      
    let sortedArr;

    if(sort === "ASC"){
      sortedArr = characters.sort((a, b) => {
          return a[`${category}`] < b[`${category}`] ? -1 : 1          
      })            
      setSort("DESC")
    }

    else if(sort === "DESC"){
        sortedArr = characters.sort((a, b) => {
            return a[`${category}`] > b[`${category}`] ? -1 : 1          
        })            
        setSort("ASC")
    }

    setCharacters([...sortedArr]);
  }
  

  //if we click a name in our table, we send over our character data as props and render this single character 
  if(char){
      return <SingleChar char={char}/>
  }

  

  return (
    <div className="container">
        <div style={{ display : "flex", justifyContent:"space-evenly" }}>          
        <Button onClick={() => handleSort()} variant="dark"> Sort{sort==="ASC" ? "↑" : "↓" } </Button>
        <div>
        <label for="columns"> Sort By </label>
        <select id="columns" name="columns" onChange={(e) => setCategory(e.target.value)} value={category}>                
            <option value="id">ID</option>
            <option value="name">Name</option>                        
        </select>
        </div>
        </div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col"> ID </th>            
            <th scope="col">Name</th>
            <th scope="col">Description</th>            
          </tr>
        </thead>
        <tbody>
          {characters && characters.map(char => 
          <tr key={char.id}>
            <th scope="row">{char.id}</th>
            <td className="char-name" onClick={() => setChar(char)}>{char.name}</td>
            <td>{char.deck}</td>            
          </tr>
            )}          
        </tbody>
      </table>      
    </div>
  );
};

export default Table;

