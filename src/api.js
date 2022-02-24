import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
  let changedUrl = url
  if (country) {
    changedUrl += `/countries/${country}`
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedUrl)

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }

    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)
    return data.countries
  } catch (error) {
    console.log(error)
  }
}
