import React, { useState } from "react";
import { Paper, Grid, createMuiTheme, ThemeProvider, Button } from "@material-ui/core";
import Header from "./Header";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const theme = createMuiTheme({
        palette: {
            type: isDarkMode ? "dark" : "light",

            primary: blue,
            secondary: blue,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={0} square style={{ height: "100%" }}>
                <Grid container direction="column">
                    <Grid item>
                        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <div style={{ margin: 30 }}>
                                Home
                            </div>
                            {/* <Link to="/giglist">Gig List</Link> */}
                            <Button variant="contained" color="secondary" component={Link} to={'/giglist'}>Gig List</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default Home;