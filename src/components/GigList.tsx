import React, { useState } from "react";
import { Paper, Grid, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./Header";
import { blue } from "@material-ui/core/colors";
import DenseTable from "./DenseTable";

const GigList: React.FC = () => {
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
                    <Grid item container justify="center">
                        <DenseTable />
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default GigList;