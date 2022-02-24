import { useEffect, useState } from "react"
import { fetchData } from "./api"
import { Cards, CountriesPicker, Chart } from "./components"
import { Container, Typography } from "@mui/material"

import { ReactComponent as IconCovid } from "./assets/covid-19.svg"
function App() {
  const [data, setData] = useState(null)
  const [country, setCountry] = useState("")
  useEffect(() => {
    async function getData() {
      const response = await fetchData(country)
      setData(response)
    }
    getData()
  }, [country])
  return (
    <Container>
      <Typography mb={2} mt variant="h3">
        C<IconCovid width={40} />
        VID 19 TRACKER
      </Typography>
      <Cards data={data} />
      <CountriesPicker setCountry={setCountry} />
      <Chart country={country} countryData={data} />
    </Container>
  )
}

export default App
