import React, { useState, useEffect } from "react";
import { Paper, Grid, createMuiTheme, ThemeProvider, Button, Backdrop, CircularProgress } from "@material-ui/core";
import Header from "./Header";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { ShowsInfo, Show } from "../models/models";

const Home: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [showsInfo, setShowsInfo] = useState<ShowsInfo>({
        lastUpdated: new Date(),
        shows: []
    });

    const theme = createMuiTheme({
        palette: {
            type: isDarkMode ? "dark" : "light",

            primary: blue,
            secondary: blue,
        },
    });

    const isRecentlyAdded = (show: Show, thresholdInDays = 1) => {
        if (!show.addedDate) {
            return false;
        }

        const addedDate = new Date(show.addedDate);
        const currentDate = new Date();

        const millisecondsSinceAdded = currentDate.getTime() - addedDate.getTime();

        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const thresholdInMilliseconds = thresholdInDays * millisecondsPerDay;

        const result = millisecondsSinceAdded < thresholdInMilliseconds;

        return result;

    };

    const getAllShows = (): Show[] => {
        if (!showsInfo) {
            return [];
        }

        return showsInfo.shows;
    }

    const getAddedTodayShows = (): Show[] => {
        if (!showsInfo) {
            return [];
        }

        return showsInfo.shows.filter(show => {
            return isRecentlyAdded(show, 1);
        });
    }

    const getAddedWithin3DaysShows = (): Show[] => {
        if (!showsInfo) {
            return [];
        }

        return showsInfo.shows.filter(show => {
            return isRecentlyAdded(show, 3);
        });
    }

    const getAddedWithin7DaysShows = (): Show[] => {
        if (!showsInfo) {
            return [];
        }

        return showsInfo.shows.filter(show => {
            return isRecentlyAdded(show, 7);
        });
    }

    useEffect(() => {
        const fetchShowsInfo = async () => {
            console.log("fetchShowsInfo");

            const url = `https://show01-cd72d.firebaseio.com/.json`;

            const responseJson = await fetch(url);

            const response: ShowsInfo = await responseJson.json();

            console.log("fetchShowsInfo", "response", response);

            setShowsInfo(response);
            setIsLoading(false);
        };

        fetchShowsInfo();

    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={0} square style={{ height: "100%" }}>
                <Grid container direction="column" justify="center" spacing={4}>
                    <Grid item>
                        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    </Grid>
                    {
                        isLoading ? <Backdrop open={true}><CircularProgress color="inherit" /></Backdrop> : (
                            <Grid item container direction="column" spacing={2} alignItems="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" component={Link} to={'/giglist'} fullWidth>
                                        Gig List {isLoading ? null : <span>&nbsp;({getAllShows().length})</span>}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist'} >
                                        Added Today {isLoading ? null : <span>&nbsp;({getAddedTodayShows().length})</span>}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist'} >
                                        Added In Last 3 Days {isLoading ? null : <span>&nbsp;({getAddedWithin3DaysShows().length})</span>}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist'}>
                                        Added In Last 7 Days {isLoading ? null : <span>&nbsp;({getAddedWithin7DaysShows().length})</span>}
                                    </Button>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default Home;