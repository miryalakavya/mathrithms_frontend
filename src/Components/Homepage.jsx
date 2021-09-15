import React, { useContext, useEffect } from "react";
import {
  TextField,
  Grid,
  Button,
  Paper,
  Card,
  CardContent,
  CardActions,
  Container,
  CardMedia,
  Typography,
  makeStyles,
  IconButton,
  CardActionArea,
  Avatar
} from "@material-ui/core";
import useStyles from "./Home";

const Homepage = () => {
  let classes = useStyles();
  return (
    <div className="Bigdiv">
      <Grid>
        <div className={classes.colordiv}>
          <Grid>
            <div className={classes.size1}>Item 1</div>
          </Grid>
          <Grid>
            <div className={classes.size2}>Item 2</div>
          </Grid>
          <Grid>
            <div className={classes.size3}>Item 3</div>
          </Grid>
          <Grid>
            <div className={classes.size4}>Item 4</div>
          </Grid>
        </div>

        <Grid>
          <div className={classes.title}>Title</div>
        </Grid>
        {/* <Grid>
          <div className={classes.titlepagesidebar}>Item 6</div>
          </Grid> */}
      </Grid>
    </div>
  );
};

export default Homepage;
