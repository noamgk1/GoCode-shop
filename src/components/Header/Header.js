import FilterByPrice from "../FilterByPrice";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "#00acc1",
    },
    palette: {
      primary: {
        main: "#00acc1",
      },
      secondary: {
        main: "#467eac",
      },
    },
  },
}));

const Header = ({ categories, onChoose, value, handleChange }) => {
  let index = 1;
  const classes = useStyles();

  return (
    <Box width={1} component="span" display="block">
      <Grid
        container="fixed"
        direction="row"
        justifyContent="space-evenly"
        alignItems="baseline"
      >
        <Grid item xs={6} sm={3}>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Filter by:"
                variant="outlined"
                onChange={onChoose}
              >
                {categories.map((p) => (
                  <MenuItem key={index++} value={p} color="primary">
                    {p}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div align="left" dir="ltr">
            <FilterByPrice value={value} handleChange={handleChange} />{" "}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
