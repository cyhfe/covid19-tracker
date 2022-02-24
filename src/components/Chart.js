import { useEffect, useState } from "react"
import { fetchDailyData } from "../api"
import { Line, Bar } from "react-chartjs-2"
import "../utils/chart"
import { red, green, purple, blue } from "@mui/material/colors"

function Chart({ country, countryData }) {
  const [dailyData, setDailyData] = useState(null)

  function renderChart() {
    return country ? renderBar() : renderLine()
  }

  function renderBar() {
    if (!countryData) return null
    console.log(countryData)
    const { confirmed, deaths, recovered } = countryData
    const data = {
      labels: ["confirmed", "recovered", "deaths"],
      datasets: [
        {
          label: country,
          data: [confirmed.value, recovered.value, deaths.value],
          borderColor: blue[500],
          backgroundColor: blue[200],
        },
        // {
        //   label: "recovered",
        //   data: recovered.value,
        //   borderColor: green[500],
        //   backgroundColor: green[200],
        // },
        // {
        //   label: "deaths",
        //   data: deaths.value,
        //   borderColor: red[500],
        //   backgroundColor: red[200],
        // },
      ],
    }
    return <Bar data={data} />
  }

  function renderLine() {
    if (!dailyData) return null
    const data = {
      labels: dailyData.map((d) => d.reportDate),
      datasets: [
        {
          label: "infected",
          data: dailyData.map((d) => d.confirmed.total),
          borderColor: purple[500],
          backgroundColor: purple[200],
        },
        {
          label: "recovered",
          data: dailyData.map((d) => d.recovered.total),
          borderColor: green[500],
          backgroundColor: green[200],
        },
        {
          label: "deaths",
          data: dailyData.map((d) => d.deaths.total),
          borderColor: red[500],
          backgroundColor: red[200],
        },
      ],
    }
    return <Line data={data} />
  }

  useEffect(() => {
    const getData = async () => {
      setDailyData(await fetchDailyData())
    }
    getData()
  }, [])
  return <div>{renderChart()}</div>
}

export default Chart
