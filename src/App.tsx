import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { blue } from "@material-ui/core/colors";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from "./components/Home";
import GigList from "./components/GigList";

const App: React.FC = () => {
  const [isDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",

      primary: blue,
      secondary: blue,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/giglist" exact component={GigList} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
