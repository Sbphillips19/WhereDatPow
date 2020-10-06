import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Pricing
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Intro to Kiteboarding"
              pricing={
                <span>
                  $100
                  <Typography display="inline"> / 1.5 hours</Typography>
                </span>
              }
              features={["Learn about safety and basics of kiting",
                "Learn about the wind window, launching, and landing",
                "Use a trainer kite to get the feel of manuevering a kite"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Kiteboarding Level I"
              pricing={
                <span>
                  $450
                  <Typography display="inline"> / 3 hours</Typography>
                </span>
              }
              features={["Learn about safety and basics of kiting on snow",
                "Launch and land your first kite and learn how to self launch and self land",
                "Get riding and learn how to properly power the kite"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Kiteboarding Level II"
              pricing={
                <span>
                  $450
                  <Typography display="inline"> / 3 hours</Typography>
                </span>
              }
              features={["Learn how to transition", "Learn how to go upwind and get back to where you started", "Learn the power of kiteloops (necessary to get up the mountain)"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Hourly professional lessons"
              pricing={
                <span>
                  $100
                  <Typography display="inline"> / hour</Typography>
                </span>
              }
              features={["For intermediate/advanced riders", "Learn how to jump propery and boost higher", "Learn how to glide down the mountain"]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Drone photography"
              pricing={
                <span>
                  $100
                  <Typography display="inline"> / hour</Typography>
                </span>
              }
              features={["Mavic Air 2", "Comes with SD card", "We will record you and give you the SD card at the end of your session"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Backcountry Expeditions"
              pricing={
                <span>
                  Contact for prices
                  <Typography display="inline"> / hour</Typography>
                </span>
              }
              features={["Kiteboard backcountry", "Advanced riders only", "Must provide proof of avy 1 and understand risks"]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
