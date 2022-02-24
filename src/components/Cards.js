import { Card, CardContent, Typography, Grid } from "@mui/material"

function Cards({
  confirmed = {},
  revovered = {},
  deaths = {},
  lastUpdate = {},
}) {
  return (
    <div>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item flexGrow={1}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                {confirmed.value ?? "loading"}
              </Typography>
              <Typography color="textSecondary">2012-11-12</Typography>
              <Typography variant="body2">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item flexGrow={1}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">123</Typography>
              <Typography color="textSecondary">2012-11-12</Typography>
              <Typography variant="body2">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item flexGrow={1}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">123</Typography>
              <Typography color="textSecondary">2012-11-12</Typography>
              <Typography variant="body2">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
