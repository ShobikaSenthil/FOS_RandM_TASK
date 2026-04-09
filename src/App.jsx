import { useEffect, useState } from "react"
import { fetchCharacters } from "./services/api"
import CharacterList from "./components/characters/CharacterList";
import Navbar from "./components/Navbar";
import { Container, Toolbar } from "@mui/material";
import Pagination from "./components/characters/Pagination"

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    try {
      const data = await fetchCharacters({ page, name, status });
      setCharacters(data.results);
      setTotalPages(data.info.pages);
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
      <Navbar />
      <Toolbar />
      <Container sx={{ mt: 2 }}>
        <CharacterList characters={characters} />
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Container>
    </>
  )
}

export default App
