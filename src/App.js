import { Container, Paper, Typography } from "@material-ui/core";
import {NavLink, Route, Switch} from 'react-router-dom';

import Books from "./Books";
import Characters from "./Characters";
import Movies from "./Movies";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">

        <Paper className="header">
          <Typography variant="h3">The ONE to rule them all</Typography>
          <nav className="nav">
              <Typography color="primary" variant="overline">
                <NavLink exact to="/" className="MuiTypography-colorPrimary" activeClassName="MuiTypography-colorSecondary">Books</NavLink>
                <NavLink to="/movies" className="MuiTypography-colorPrimary" activeClassName="MuiTypography-colorSecondary">Movies</NavLink>
                <NavLink to="/characters" className="MuiTypography-colorPrimary" activeClassName="MuiTypography-colorSecondary">Characters</NavLink>
              </Typography>
          </nav>
        </Paper>

        <Switch>
          <Route path="/characters/" component={Characters} />
          <Route path="/movies/" component={Movies} />
          <Route exact path="/" component={Books} />
        </Switch>

        {/* <p>Playing with the lord of the rings API</p>
        <p>Books, Movies, Character</p>
        <h2>All Books</h2>
        <Books/>
        <br/><br/>
        <h2>All Movies</h2>
        <Movies/> */}
      </Container>
    </div>
  );
}

export default App;
