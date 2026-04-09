import { useEffect, useState } from "react"
import { fetchCharacters } from "./services/api"
import CharacterList from "./components/characters/CharacterList";
import Navbar from "./components/Navbar";
import { Container, Toolbar, Typography, Box, CircularProgress } from "@mui/material";
import Pagination from "./components/Pagination"
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedName = useDebounce(name, 500);
  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCharacters({ page, name: debouncedName || undefined, status });
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (err) {
      console.error("Error while fetching data", err);
      setError("Something went wrong. Please try again.");
      setCharacters([]);
    } finally {
      setLoading(false);
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
        {loading ? (
          <Box textAlign="center" mt={5}>
            < CircularProgress />
          </Box>
        ) : error ? (
          <Box textAlign="center" mt={5}>
            <Typography color="error" variant="h6">
              {error}
            </Typography>
          </Box>
        ) :
          characters.length === 0 ? (
            <Box textAlign="center" mt={5}>
              < Typography variant="h6" color="text.secondary">
                No characters found
              </Typography>
            </Box >
          ) : (
            <>
              <CharacterList characters={characters} />
            </>
          )
        }
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Container >
    </>
  )
}

export default App
