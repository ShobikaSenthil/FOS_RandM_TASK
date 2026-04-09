import { useEffect, useState } from "react"
import { fetchCharacters } from "./services/api"

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const getData = async () => {
    try {
      const data = await fetchCharacters({ page, name, status });
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data", error);
      setCharacters([]);
    }
  };

  useEffect(() => {
    getData();
  }, [page, name, status]);

  return (
    characters.map((character) => {
      return <h2>{character.name}</h2>
    })
  )
}

export default App
