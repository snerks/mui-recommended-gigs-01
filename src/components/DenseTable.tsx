import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ShowsInfo } from '../models/models';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [showsInfo, setShowsInfo] = useState<ShowsInfo>({
        lastUpdated: new Date(),
        shows: [{
            id: "1",
            venue: "Fleece",
            artists: [
                {
                    name: "Chuck P"
                }

            ],
            isCancelled: false,
            isSoldOut: false,
            date: new Date()
        }]
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
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Artists</TableCell>
                        <TableCell>Venue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {showsInfo.shows.map((show) => (
                        <TableRow key={Math.random()}>
                            <TableCell>{show.date.toString()}</TableCell>
                            <TableCell>{show.date.toString()}</TableCell>
                            <TableCell component="th" scope="row">
                                {/* <pre>
                                    {JSON.stringify(show, null, 2)}
                                </pre> */}
                                {show.artists.map(artist => {
                                    return (
                                        <p>
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
                            </TableCell>
                            <TableCell>{show.venue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
