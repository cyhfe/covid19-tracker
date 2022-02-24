import * as React from "react"
import { Grid } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { fetchCountries } from "../api"
function CountriesPicker({ setCountry }) {
  const [countries, setCountries] = React.useState(null)

  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  React.useEffect(() => {
    async function getCountries() {
      setCountries(await fetchCountries())
    }
    getCountries()
  }, [])
  return (
    <Grid justifyContent="space-between">
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">country</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={""}
          onChange={handleChange}
          autoWidth
          label="country"
          defaultValue=""
        >
          <MenuItem value="">Global</MenuItem>
          {countries &&
            countries.length &&
            countries.map((country) => (
              <MenuItem value={country.name} key={country.name}>
                {country.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

export default CountriesPicker
