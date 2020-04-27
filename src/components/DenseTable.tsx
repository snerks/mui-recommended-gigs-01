import React, { useEffect, useState } from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ShowsInfo, Show } from "../models/models";
import {
  CircularProgress,
  Backdrop,
  Chip,
  Grid,
  Hidden,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    // maxWidth: 500
  },
});

const getDayName = (date: Date) => {
  return new Date(date).toLocaleDateString("en-GB", { weekday: "short" });
};

const getDateFormatted = (date: Date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };

  return new Date(date).toLocaleDateString("en-GB", options);
};

interface Props {
  showPastEvents: boolean;

  days?: number;
}

const DenseTable: React.FC<Props> = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [showPastEvents] = useState(props.showPastEvents);
  const [days] = useState(props.days);

  const [showsInfo, setShowsInfo] = useState<ShowsInfo>({
    lastUpdated: new Date(),
    shows: [
      // {
      //     id: "1",
      //     venue: "Fleece",
      //     artists: [
      //         {
      //             name: "Chuck P"
      //         }
      //     ],
      //     isCancelled: false,
      //     isSoldOut: false,
      //     date: new Date()
      // }
    ],
  });

  useEffect(() => {
    const fetchShowsInfo = async () => {
      // console.log("fetchShowsInfo");

      const url = `https://show01-cd72d.firebaseio.com/.json`;

      const responseJson = await fetch(url);

      const response: ShowsInfo = await responseJson.json();

      // console.log("fetchShowsInfo", "response", response);

      setShowsInfo(response);
      setIsLoading(false);
    };

    fetchShowsInfo();
  }, []);

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

  // const getInDateRangeShows = (): Show[] => {
  //     if (!showsInfo) {
  //         return [];
  //     }

  //     const { shows } = showsInfo;

  //     if (showPastEvents) {
  //         return shows;
  //     }

  //     const results = shows.filter(dateRangeShowFilter);

  //     return results;
  // }

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

  const dateRangeShowFilter = (show: Show) => {
    let willShowEvent = false;

    if (showPastEvents) {
      willShowEvent = true;
    } else {
      willShowEvent = isFutureEvent(show);
    }

    return willShowEvent;
  };

  const addedDateRangeShowFilter = (show: Show) => {
    let willShowEvent = false;

    if (days === -1) {
      willShowEvent = true;
    } else {
      willShowEvent = isRecentlyAdded(show, days);
    }

    return willShowEvent;
  };

  // const getInAddedDateRangeShows = (shows: Show[]): Show[] => {
  //     if (!shows) {
  //         return [];
  //     }

  //     // const { shows } = showsInfo;

  //     if (days === -1) {
  //         return shows;
  //     }

  //     const inEventDateRangeShows = shows.filter(dateRangeShowFilter);

  //     const results = inEventDateRangeShows.filter(show => addedDateRangeShowFilter(show));

  //     return results;
  // }

  const getRelevantShows = (): Show[] => {
    // if (!shows) {
    //     return [];
    // }

    const { shows } = showsInfo;

    const inEventDateRangeShows = shows.filter(dateRangeShowFilter);

    if (days === -1) {
      return inEventDateRangeShows;
    }

    const results = inEventDateRangeShows.filter(addedDateRangeShowFilter);

    return results;
  };

  return isLoading ? (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <TableContainer component={Paper} square>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <Hidden smDown>
              <StyledTableCell>Day</StyledTableCell>
            </Hidden>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Artists</StyledTableCell>
            <StyledTableCell>Venue</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
            <StyledTableCell>&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {showsInfo.shows.filter(show => new Date(show.date) >= new Date()).map((show) => ( */}
          {getRelevantShows().map((show) => (
            <StyledTableRow key={Math.random()}>
              <Hidden smDown>
                <StyledTableCell>{getDayName(show.date)}</StyledTableCell>
              </Hidden>
              <StyledTableCell>{getDateFormatted(show.date)}</StyledTableCell>
              <StyledTableCell>
                {/* <pre>
                                    {JSON.stringify(show, null, 2)}
                                </pre> */}
                {show.artists.map((artist) => {
                  return (
                    <p key={`${show.id}.${artist.name}`}>
                      {artist.name}

                      {/* <span *ngIf="artist.stageTime"
                                          class="badge badge-pill badge-primary"
                                          style="margin-right: 10px;"
                                          title="Stage Time">
                                          {{artist.stageTime}}
                                        </span>
                          
                                        <a *ngIf="artist.videoUrl" [attr.href]="artist.videoUrl">
                                          <span
                                            class="badge badge-danger"
                                            style="margin-right: 10px;">
                                            Video
                                          </span>
                                        </a> */}
                    </p>
                  );
                })}
              </StyledTableCell>
              <StyledTableCell>{show.venue}</StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  component={Link}
                  to={`/gigdetails/${show.id}`}
                >
                  <span>View</span>
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Grid container direction="column" spacing={1}>
                  {show.isSoldOut && (
                    <Grid item>
                      <Chip
                        style={{
                          backgroundColor: theme.palette.warning.main,
                          color: theme.palette.warning.contrastText,
                        }}
                        size="small"
                        label="Sold Out"
                      />
                    </Grid>
                  )}
                  {show.isCancelled && (
                    <Grid item>
                      <Chip
                        style={{
                          backgroundColor: theme.palette.error.main,
                          color: theme.palette.error.contrastText,
                        }}
                        size="small"
                        label="Cancelled"
                      />
                    </Grid>
                  )}
                  {show.priceText && show.priceText.indexOf("£") === 0 && (
                    <Grid item>
                      <Chip
                        style={{
                          backgroundColor: theme.palette.info.main,
                          color: theme.palette.info.contrastText,
                        }}
                        size="small"
                        label={show.priceText}
                      />
                    </Grid>
                  )}
                  {show.notes && (
                    <Grid item>
                      <span
                        style={
                          {
                            // backgroundColor: theme.palette.info.main,
                            // color: theme.palette.info.contrastText
                          }
                        }
                      >
                        {show.notes}
                      </span>
                    </Grid>
                  )}
                </Grid>

                {/* 

            <span *ngIf="show.priceText && show.priceText.indexOf('£') === 0"
              class="badge badge-info" style="margin-right: 10px;">
              {{show.priceText}}
            </span>

            <span *ngIf="show.notes" style="margin-right: 10px;">{{show.notes}}</span> */}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
