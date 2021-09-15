import { Container, Grid, Paper, makeStyles, Button } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
  size1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "394px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "150px",
      height: "150px",
      top: "65px",
      left: "20px"
    }
  },
  size2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "786px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "150px",
      height: "150px",
      top: "65px",
      left: "190px"
    }
  },
  size3: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "1178px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "150px",
      height: "150px",
      top: "240px",
      left: "20px"
    }
  },
  size4: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "1570px",
    top: "110px",
    background: "#E0E0E0",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "150px",
      height: "150px",
      top: "240px",
      left: "190px"
    }
  },
  titlepagesidebar: {
    position: "absolute",
    width: "330px",
    height: "1010px",
    left: "0px",
    top: "70px",
    background: "#6FCF97"
  },
  title: {
    position: "absolute",
    width: "1970px",
    height: "70px",
    left: "0px",
    top: "0px",
    background: "#6FCF97",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "600px",
      height: "40px",
      left: "0px",
      top: "0px",
      background: "#6FCF97"
    }
  },
  colordiv: {
    background: "#E5E5E5"
  }
}));
export default useStyles;
