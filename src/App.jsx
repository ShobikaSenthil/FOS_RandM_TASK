import { useEffect, useState } from "react"
import { fetchCharacters } from "./services/api"
import CharacterList from "./components/characters/CharacterList";
import Navbar from "./components/Navbar";
import { Container, Toolbar, Typography, Box } from "@mui/material";
import Pagination from "./components/characters/Pagination"
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const debouncedName = useDebounce(name, 500);
  const getData = async () => {
    try {
      const data = await fetchCharacters({ page, name: debouncedName || undefined, status });
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Error while fetching data", error);
      setCharacters([]);
    }
  };

  useEffect(() => {
    getData();
  }, [page, debouncedName, status]);

  useEffect(() => {
    setPage(1);
  }, [debouncedName, status]);

  return (
    <>
      <Navbar
        name={name}
        setName={setName}
        status={status}
        setStatus={setStatus}
      />
      <Toolbar />
      <Container sx={{ mt: 2 }}>
        {characters.length === 0 ? (
          <Box textAlign="center" mt={5}>
            < Typography variant="h6" color="text.secondary">
              No characters found
            </Typography>
          </Box >
        ) : (
          <>
            <CharacterList characters={characters} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )
        }

      </Container >
    </>
  )
}

export default App
