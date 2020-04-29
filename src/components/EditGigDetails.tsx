import "date-fns";
import React, { useState, useEffect } from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  Formik,
  Field,
  Form,
  useField,
  useFormik,
  FieldAttributes,
  FieldArray,
} from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  Backdrop,
  CircularProgress,
  IconButton,
  Container,
  Chip,
  Badge,
  Typography,
  Hidden,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  //   KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
  KeyboardDatePicker,
} from "formik-material-ui-pickers";

import { Paper, Grid, ThemeProvider, createMuiTheme } from "@material-ui/core";
// import Header from "./components/Header";
import * as yup from "yup";

import { blue } from "@material-ui/core/colors";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DeleteIcon from "@material-ui/icons/Delete";

import Header from "./Header";

import { useParams } from "react-router-dom";
import { ShowsInfo, Show } from "../models/models";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

// Does not work in pre-Chromium MS Edge
// const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
//   const [field] = useField<{}>(props);

//   return <FormControlLabel {...field} control={<Radio />} label={label} />;
// };

const MyRadio: React.FC<MyRadioProps> = (props) => {
  const { label, ...otherProps } = props;
  const [field] = useField<{}>(otherProps);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyCheckbox: React.FC<MyRadioProps> = (props) => {
  const { label, ...otherProps } = props;
  const [field] = useField<{}>(otherProps);

  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

type MyTextFieldProps = {
  label?: string;
  placeholder: string;
} & FieldAttributes<{}>;

const MyTextField: React.FC<MyTextFieldProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      value={field.value || ""}
      helperText={errorText}
      autoComplete="off"
      error={!!errorText}
      fullWidth
      label={!!label ? label : null}
    />
  );
};

const validationSchema = yup.object({
  venue: yup.string().required(),
  date: yup.date().required(),
  artists: yup.array().of(
    yup.object({
      name: yup.string().required(),
    })
  ),
});

interface RouteParams {
  id?: string;
}

const EditGigDetails: React.FC = () => {
  const routeParams = useParams<RouteParams>();

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [id] = useState(routeParams.id);

  const [showsInfo, setShowsInfo] = useState<ShowsInfo>({
    lastUpdated: new Date(),
    shows: [],
  });

  const haveId = !!id;

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",

      primary: blue,
      secondary: blue,
    },
  });

  useEffect(() => {
    const fetchShowsInfo = async () => {
      // console.log("fetchShowsInfo");

      // https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls
      // https://firebase.google.com/docs/reference/rest/database/
      const url = `https://show01-cd72d.firebaseio.com/.json`;

      const responseJson = await fetch(url);

      const response: ShowsInfo = await responseJson.json();

      // console.log("fetchShowsInfo", "response", response);

      setShowsInfo(response);
      setIsLoading(false);
    };

    fetchShowsInfo();
  }, []);

  const getShowById = (id: string) => {
    const idMatch = showsInfo.shows.find((show) => show.id && show.id === id);

    return idMatch;
  };

  const show = !!id ? getShowById(id) : null;

  const initialValues: Show = show
    ? show
    : {
        addedDate: new Date(),
        venue: "",
        date: new Date(),
        notes: "",
        priceText: "",
        isSoldOut: false,
        isCancelled: false,
        artists: [
          { name: "", stageTime: "", videoUrl: "", id: "" + Math.random() },
        ],
      };

  return isLoading ? (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <Container maxWidth={false}>
      <Paper elevation={0} square style={{ height: "100%" }}>
        <Grid container direction="column">
          <Grid item>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Grid>
          <Grid item container alignContent="stretch">
            <Grid item xs={12}>
              <div style={{ margin: 30 }}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(data, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    // Make async call
                    console.log("submit", data);

                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <Grid container>
                      <Grid item xs={12}>
                        <Form>
                          <Grid container spacing={2} direction="column">
                            <Grid item>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Field
                                  component={KeyboardDatePicker}
                                  autoOk
                                  name="date"
                                  label="Event Date"
                                  disableToolbar
                                  variant="inline"
                                  format="dd MMMM yyyy"
                                  fullWidth
                                />
                              </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item>
                              <MyTextField
                                placeholder="venue"
                                name="venue"
                                type="input"
                                label="Venue"
                              />
                            </Grid>
                          </Grid>

                          <Grid
                            container
                            direction="column"
                            style={{ marginTop: 10 }}
                          >
                            <Grid item container>
                              <Grid item xs={12}>
                                <FieldArray name="artists">
                                  {(arrayHelpers) => (
                                    <div>
                                      <Grid container direction="column">
                                        <Grid
                                          item
                                          container
                                          justify="flex-start"
                                          alignItems="center"
                                          spacing={2}
                                        >
                                          <Grid item>
                                            <Badge
                                              badgeContent={
                                                values.artists.length
                                              }
                                              color="primary"
                                            >
                                              <Typography>Artists</Typography>
                                            </Badge>
                                          </Grid>
                                          <Grid item>
                                            <IconButton
                                              aria-label="add"
                                              onClick={() =>
                                                arrayHelpers.push({
                                                  name: "",
                                                  stageTime: "",
                                                  videoUrl: "",
                                                  id: "" + Math.random(),
                                                })
                                              }
                                            >
                                              <PersonAddIcon />
                                            </IconButton>
                                          </Grid>
                                        </Grid>
                                        <Grid
                                          item
                                          container
                                          direction="column"
                                          xs={12}
                                        >
                                          {values.artists.map(
                                            (artist, index) => {
                                              const nameName = `artists.${index}.name`;
                                              const stageTimeName = `artists.${index}.stageTime`;
                                              const videoUrlName = `artists.${index}.videoUrl`;

                                              return (
                                                <Grid
                                                  item
                                                  container
                                                  key={
                                                    artist.id || Math.random()
                                                  }
                                                  xs={12}
                                                >
                                                  <Grid item xs={9} sm={3}>
                                                    <MyTextField
                                                      placeholder="artist name"
                                                      name={nameName}
                                                    />
                                                  </Grid>

                                                  <Hidden smDown>
                                                    <Grid item xs={3}>
                                                      <MyTextField
                                                        placeholder="stage time"
                                                        name={stageTimeName}
                                                      />
                                                    </Grid>
                                                  </Hidden>
                                                  <Hidden smDown>
                                                    <Grid item xs={3}>
                                                      <MyTextField
                                                        placeholder="video url"
                                                        name={videoUrlName}
                                                      />
                                                    </Grid>
                                                  </Hidden>

                                                  <Grid item xs={3}>
                                                    <IconButton
                                                      size="small"
                                                      aria-label="delete"
                                                      onClick={() =>
                                                        arrayHelpers.remove(
                                                          index
                                                        )
                                                      }
                                                    >
                                                      <DeleteIcon />
                                                    </IconButton>
                                                  </Grid>
                                                </Grid>
                                              );
                                            }
                                          )}
                                        </Grid>
                                      </Grid>
                                    </div>
                                  )}
                                </FieldArray>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid
                            container
                            spacing={2}
                            direction="column"
                            style={{ marginTop: 30 }}
                          >
                            <Grid item>
                              <MyTextField
                                placeholder="notes"
                                name="notes"
                                type="input"
                                label="Notes"
                              />
                            </Grid>
                            <Grid item>
                              <MyTextField
                                placeholder="price"
                                name="priceText"
                                type="input"
                                label="Price"
                              />
                            </Grid>
                          </Grid>

                          <MyCheckbox
                            name="isSoldOut"
                            type="checkbox"
                            label="Is Sold Out?"
                          />

                          <MyCheckbox
                            name="isCancelled"
                            type="checkbox"
                            label="Is Cancelled?"
                          />

                          <Grid
                            item
                            container
                            justify="flex-end"
                            style={{ paddingTop: 30 }}
                          >
                            <Button
                              disabled={isSubmitting}
                              type="submit"
                              variant="contained"
                              color="primary"
                              size="small"
                            >
                              save
                            </Button>
                          </Grid>
                        </Form>
                      </Grid>
                      {/* <Grid item xs={12} container direction="row">
                        <Grid item>
                          <pre>{JSON.stringify(values, null, 2)}</pre>
                        </Grid>
                        <Grid item>
                          <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </Grid>
                      </Grid> */}
                    </Grid>
                  )}
                </Formik>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default EditGigDetails;
