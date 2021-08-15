import { useContext } from "react";
import { CartContext } from "./CartContext";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1, "auto"),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const SideCart = () => {
  const { cartList } = useContext(CartContext);
  const classes = useStyles();
  const itemsPrice = cartList.reduce((a, c) => a + c.qty * c.price, 0);
  const [state, setState] = React.useState({
    left: false,
  });
  const { onRemove, onAdd } = useContext(CartContext);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h6" className={classes.title}>
        My Cart
      </Typography>

      <Divider />
      <List>
        {cartList.length === 0 && <div>Cart is empty</div>}
        {cartList.map((p) => (
          <ListItem>
            <ListItemIcon>
              <img src={p.image} width="50" height="50" alt=" " />
            </ListItemIcon>
            <ListItemText
              primary={p.title.slice(0, 20)}
              secondary={p.price + " $"}
            />
            <div className={classes.root}>
              <ListItemSecondaryAction>
                <IconButton className={classes.margin}>
                  <AddBoxIcon onClick={() => onAdd(p)} />
                </IconButton>
                <>{p.qty}</>
                <IconButton className={classes.margin}>
                  <IndeterminateCheckBoxIcon onClick={() => onRemove(p)} />
                </IconButton>
              </ListItemSecondaryAction>
            </div>
            <Divider />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Total payment:" />
          <ListItemSecondaryAction>{itemsPrice} $ </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="outlined">
            My Cart
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default SideCart;
