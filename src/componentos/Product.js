import "./Product.css";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  title: {
    minHeight: 100,
    height: 100,
  },
  media: {
    height: 100,
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Product = ({ id, image, title, price, category, description }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const titleLength =
    title.length > 30
      ? title.slice(0, 30)
      : title.length < 21
      ? title + "-My Shop"
      : title;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cart = { id: id, title: title, price: price, image: image };
  const { onAdd } = useContext(CartContext);

  return (
    <div>
      <div className="product-card">
        <Card className={classes.root}>
          <div className="product-image">
            <CardMedia className={classes.media} image={image} title={title} />
          </div>
          <div className="product-info">
            <CardHeader
              className={classes.root}
              title={<div>{titleLength}</div>}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <h1>{price} $</h1>
                <br />
                <h4>{category}</h4>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Button
                variant="outlined"
                color="black"
                onClick={() => onAdd(cart)}
              >
                Add to cart
              </Button>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {
                    <h1>
                      <b>{title}</b>
                    </h1>
                  }
                </Typography>
              </CardContent>
              <CardContent>
                <Typography paragraph>{description}</Typography>
              </CardContent>
            </Collapse>
          </div>
        </Card>
      </div>
    </div>
  );
};
//<button onClick={onCart(title)}>Add To card</button>
export default Product;
