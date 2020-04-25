import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ShowsInfo } from '../models/models';
import { CircularProgress } from '@material-ui/core';

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
    return new Date(date).toLocaleDateString("en-GB", { weekday: 'long' });
}

const getDateFormatted = (date: Date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return new Date(date).toLocaleDateString("en-GB", options);
}

export default function DenseTable() {
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
        isLoading ? <CircularProgress color="secondary" size={200} /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Day</StyledTableCell>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Artists</StyledTableCell>
                            <StyledTableCell>Venue</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showsInfo.shows.filter(show => new Date(show.date) >= new Date()).map((show) => (
                            <StyledTableRow key={Math.random()}>
                                <StyledTableCell >{getDayName(show.date)}</StyledTableCell>
                                <StyledTableCell>{getDateFormatted(show.date)}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
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
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}
