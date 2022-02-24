import { Card, CardContent, Typography, Grid } from "@mui/material"
import { red, green, purple } from "@mui/material/colors"
import CountUp from "react-countup"

function Cards({ data }) {
  const { confirmed, recovered, deaths, lastUpdate } = data ?? {}
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} wrap="nowrap" mb={2}>
      <Grid item flexGrow={1}>
        <Card
          sx={{
            height: "100%",
            paddingLeft: "5%",
            background: purple[400],
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              background: "#fff",
            }}
          >
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {confirmed ? <CountUp end={confirmed.value} /> : "NO DATA"}
            </Typography>
            <Typography color="textSecondary">
              {lastUpdate
                ? new Date(lastUpdate).toLocaleDateString()
                : "NO DATA"}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item flexGrow={1}>
        <Card
          sx={{
            height: "100%",
            paddingLeft: "5%",
            background: green[400],
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              background: "#fff",
            }}
          >
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {recovered ? <CountUp end={recovered.value} /> : "NO DATA"}
            </Typography>
            <Typography color="textSecondary">
              {lastUpdate
                ? new Date(lastUpdate).toLocaleDateString()
                : "NO DATA"}
            </Typography>
            <Typography variant="body2">
              Number of recoveries cases of COVID-19
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item flexGrow={1}>
        <Card
          sx={{
            height: "100%",
            paddingLeft: "5%",
            background: red[400],
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              background: "#fff",
            }}
          >
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {deaths ? <CountUp end={deaths.value} /> : "NO DATA"}
            </Typography>
            <Typography color="textSecondary">
              {lastUpdate
                ? new Date(lastUpdate).toLocaleDateString()
                : "NO DATA"}
            </Typography>
            <Typography variant="body2">
              Number of deaths cases of COVID-19
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cards
