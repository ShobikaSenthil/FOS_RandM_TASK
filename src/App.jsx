import { useEffect, useState } from "react"
import { fetchCharacters } from "./services/api"
import CharacterList from "./components/characters/CharacterList";

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
      console.error("Error while fetching data", error);
      setCharacters([]);
    }
  };

  useEffect(() => {
    getData();
  }, [page, name, status]);

  return (
    <>
      <CharacterList characters={characters} />
    </>
  )
}

export default App
