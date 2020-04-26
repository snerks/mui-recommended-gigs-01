import React, { useState, useEffect } from "react";
import { Paper, Grid, createMuiTheme, ThemeProvider, Button, Backdrop, CircularProgress, Badge, Chip, useTheme } from "@material-ui/core";
import Header from "./Header";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { ShowsInfo, Show } from "../models/models";

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: Function;
}

const Home: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
    const theme = useTheme();

    // const [isDarkMode, setIsDarkMode] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [showsInfo, setShowsInfo] = useState<ShowsInfo>({
        lastUpdated: new Date(),
        shows: []
    });

    // const theme = createMuiTheme({
    //     palette: {
    //         type: isDarkMode ? "dark" : "light",
    //         primary: {
    //             main: '#0b5994',
    //         },
    //         secondary: {
    //             main: '#1d83c6',
    //         },
    //     },
    // });

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

    const isFutureEvent = (show: Show) => {
        if (!show.date) {
            return false;
        }

        const eventDate = new Date(show.date);
        eventDate.setHours(23, 59, 0, 0);

        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        return eventDate >= currentDate;
    };

    const getAllShows = (): Show[] => {
        if (!showsInfo) {
            return [];
        }

        return showsInfo.shows;
    }

    const getFutureShows = (): Show[] => {
        if (!showsInfo) {
            return [];
        }

        return showsInfo.shows.filter(show => isFutureEvent(show));
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
            <Paper elevation={0} square style={{ height: "100vh" }}>
                <Grid container direction="column" justify="center" spacing={4}>
                    <Grid item>
                        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    </Grid>
                    {
                        isLoading ? <Backdrop open={true}><CircularProgress color="inherit" /></Backdrop> : (
                            <Grid item container direction="column" spacing={2} justify="center" alignItems="stretch">
                                <Grid item>
                                    <Button variant="contained" color="primary" component={Link} to={'/giglist/false'} fullWidth>
                                        <span>Future Events List</span>&nbsp;
                                        {" "}
                                        <Chip variant="default" color="secondary" size="small" label={getFutureShows().length} />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist/false/1'} fullWidth>
                                        <span>Added Today</span>&nbsp;
                                        {/* {isLoading ? null : <span>&nbsp;({getAddedTodayShows().length})</span>} */}
                                        <Chip variant="default" color="primary" size="small" label={getAddedTodayShows().length} />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist/false/3'} fullWidth>
                                        <span>
                                            Added In Last 3 Days
                                        </span>&nbsp;
                                        {/* {isLoading ? null : <span>&nbsp;({getAddedWithin3DaysShows().length})</span>} */}
                                        <Chip variant="default" color="primary" size="small" label={getAddedWithin3DaysShows().length} />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist/false/7'} fullWidth>
                                        <span>
                                            Added In Last 7 Days
                                        </span>&nbsp;
                                        {/* {isLoading ? null : <span>&nbsp;({getAddedWithin7DaysShows().length})</span>} */}
                                        <Chip variant="default" color="primary" size="small" label={getAddedWithin7DaysShows().length} />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" component={Link} to={'/giglist/true/-1'} fullWidth>
                                        <span>All Events</span>&nbsp;
                                        {" "}
                                        <Chip variant="default" color="primary" size="small" label={getAllShows().length} />
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