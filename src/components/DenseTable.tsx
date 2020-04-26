import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ShowsInfo } from '../models/models';
import { CircularProgress, Backdrop, Chip, Grid } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const getDayName = (date: Date) => {
    return new Date(date).toLocaleDateString("en-GB", { weekday: 'short' });
}

const getDateFormatted = (date: Date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return new Date(date).toLocaleDateString("en-GB", options);
}

export default function DenseTable() {
    const theme = useTheme();
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);

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
        ]
    });

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
        isLoading ? (<Backdrop open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>) : (
                <TableContainer component={Paper} square>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {/* <StyledTableCell>Day</StyledTableCell> */}
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell>Artists</StyledTableCell>
                                <StyledTableCell>Venue</StyledTableCell>
                                <StyledTableCell>&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {showsInfo.shows.filter(show => new Date(show.date) >= new Date()).map((show) => ( */}
                            {showsInfo.shows.filter(show => new Date(show.date) >= new Date()).map((show) => (
                                <StyledTableRow key={Math.random()}>
                                    {/* <StyledTableCell >{getDayName(show.date)}</StyledTableCell> */}
                                    <StyledTableCell>{getDateFormatted(show.date)}</StyledTableCell>
                                    <StyledTableCell>
                                        {/* <pre>
                                    {JSON.stringify(show, null, 2)}
                                </pre> */}
                                        {show.artists.map(artist => {
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
                                        <Grid container direction="column" spacing={1}>
                                            {
                                                show.isSoldOut &&
                                                <Grid item>

                                                    <Chip
                                                        style={{
                                                            backgroundColor: theme.palette.warning.main,
                                                            color: theme.palette.warning.contrastText
                                                        }} size="small" label="Sold Out" />
                                                </Grid>

                                            }
                                            {
                                                show.isCancelled &&
                                                <Grid item>
                                                    <Chip
                                                        style={{
                                                            backgroundColor: theme.palette.error.main,
                                                            color: theme.palette.error.contrastText
                                                        }} size="small" label="Cancelled" />
                                                </Grid>
                                            }
                                            {
                                                show.priceText && show.priceText.indexOf('£') === 0 &&
                                                <Grid item>
                                                    <Chip
                                                        style={{
                                                            backgroundColor: theme.palette.info.main,
                                                            color: theme.palette.info.contrastText
                                                        }} size="small" label={show.priceText} />
                                                </Grid>
                                            }
                                            {
                                                show.notes &&
                                                <Grid item>
                                                    <span
                                                        style={{
                                                            // backgroundColor: theme.palette.info.main,
                                                            // color: theme.palette.info.contrastText
                                                        }}>
                                                        {show.notes}
                                                    </span>
                                                </Grid>
                                            }
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
            )
    );
}
