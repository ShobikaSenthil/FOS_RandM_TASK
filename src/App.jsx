import { useEffect, useState } from "react"
import { fetchCharacters } from "./services/api"
import CharacterList from "./components/characters/CharacterList";
import Navbar from "./components/Navbar";
import { Container, Toolbar, Typography, Box, CircularProgress } from "@mui/material";
import Pagination from "./components/Pagination"
import { useDebounce } from "./hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const debouncedName = useDebounce(name, 500);


  const { data, isLoading, IsError, error } = useQuery({
    queryKey: ["characters", page, debouncedName, status],
    queryFn: () => fetchCharacters({ page, name: debouncedName || undefined, status }),
    keyPreviousData: true
  })
  const characters = data?.results || [];

  const totalPages = data?.info?.pages || 1;

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
        {isLoading ? (
          <Box textAlign="center" mt={5}>
            < CircularProgress />
          </Box>
        ) : IsError ? (
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
