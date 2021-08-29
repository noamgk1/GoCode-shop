import "./App.css";
import SideCart from "./components/SideCart";
import Home from "./views/Home";
import CartContextProvider from "./Context/CartContext";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <CartContextProvider>
      <Router>
        <AppBar color="#5F9EA0">
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontFamily="fontFamily" variant="h5" color="#5F9EA0">
                My Shop
              </Typography>
              <Typography variant="h4">
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="h4">
                <Link to="/about">About</Link>
              </Typography>

              <Typography display="block">
                <SideCart />
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <br />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <ProductDetails />
              </Grid>
            </Route>
            <Route path="/">
              <Home className="App-header" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </CartContextProvider>
  );
}

export default App;
