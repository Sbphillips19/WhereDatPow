import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import FilterHdr from "@material-ui/icons/FilterHdr";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import Waves from "@material-ui/icons/Waves";
import Accessibility from "@material-ui/icons/Accessibility";
import ImportContacts from "@material-ui/icons/ImportContacts";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import WaveBorder from "../../../shared/components/WaveBorder";

import {
  withStyles
} from "@material-ui/core";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Get more powder",
    text:
      "Ride for hours on end.  No lift lines, no bootpacking or skinning, endless pow",
    icon: <FilterHdr style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Access more areas",
    text:
      "Access spots you wouldn't be able to without a kite",
    icon: <Accessibility style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Meet new people",
    text:
      "Unlock a new group of friends to explore with",
    icon: <ImportContacts style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Be happier",
    text:
      "Kiting is something that helps put you in your zen mode and makes you escape your daily routine",
    icon: <InsertEmoticon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "Improve Water Riding",
    text:
      "Kiting snow helps improve your water riding.  You will have to get good at looping your kite which help with waves, foiling, and softening landings",
    icon: <Waves style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  // {
  //   color: "#64DD17",
  //   headline: "Feature 6",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "200"
  // },
  // {
  //   color: "#304FFE",
  //   headline: "Feature 7",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "0",
  //   smDelay: "0"
  // },
  // {
  //   color: "#C51162",
  //   headline: "Feature 8",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "200"
  // },
  // {
  //   color: "#00B8D4",
  //   headline: "Feature 9",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "0"
  // }
];

const styles = (theme) => ({
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});


function FeatureSection(props) {
  const { width, classes, theme } = props;
  return (
    <>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-fluid lg-p-top">
          <Typography variant="h3" align="center" className="lg-mg-bottom">
            Why snowkite
        </Typography>
          <div className="container-fluid">
            <Grid container spacing={calculateSpacing(width)}>
              {features.map(element => (
                <Grid
                  item
                  xs={6}
                  md={4}
                  data-aos="zoom-in-up"
                  data-aos-delay={
                    isWidthUp("md", width) ? element.mdDelay : element.smDelay
                  }
                  key={element.headline}
                >
                  <FeatureCard
                    Icon={element.icon}
                    color={element.color}
                    headline={element.headline}
                    text={element.text}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <WaveBorder
        upperColor="#FFFFFF"
        lowerColor={theme.palette.secondary.main}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);
