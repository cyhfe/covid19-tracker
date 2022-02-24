import { useEffect } from "react"
import { fetchData } from "./api"
import { Cards, CountriesPicker, Chart } from "./components"
import { Container, Typography } from "@mui/material"
function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetchData()
      console.log(response)
    }
    getData()
  }, [])
  return (
    <Container>
      <Typography mb mt variant="h1">
        COVID 19 TRACKER
      </Typography>
      <Cards />
      <CountriesPicker />
      <Chart />
    </Container>
  )
}

export default App
