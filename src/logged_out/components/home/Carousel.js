import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Dna from '../../../shared/snowkite/dna.jpg'
// import Jumping from '../../../shared/snowkite/air.jpg';
import Slingshot from '../../../shared/snowkite/slingshot.jpg'
import Tourbine from '../../../shared/snowkite/turbine.jpg'
import Leo from '../../../shared/snowkite/leo.jpg'
import Leo2 from '../../../shared/snowkite/leo2.jpg'
import Wayne from '../../../shared/snowkite/wayne.jpg'
import Wayne2 from '../../../shared/snowkite/wayne2.jpg'
import Wayne3 from '../../../shared/snowkite/wayne3.jpg'
import Wayne9 from '../../../shared/snowkite/wayne9.jpg'
// import Pow from '../../../shared/snowkite/pow.jpg'
import Pow2 from '../../../shared/snowkite/pow2.jpg'
// import Pow3 from '../../../shared/snowkite/pow3.jpg'
import Skyline from '../../../shared/snowkite/skyline.jpg'
import Wayne29 from '../../../shared/snowkite/wayne29.jpg'
// import Skyline3 from '../../../shared/snowkite/skyline3.jpg'
import Snowmobile from '../../../shared/snowkite/snowmobile.jpg'
import WaveBorder from "../../../shared/components/WaveBorder"
import classNames from "classnames";

import {
    withStyles,
    withWidth
} from "@material-ui/core";

const styles = (theme) => ({
    extraLargeButtonLabel: {
        fontSize: theme.typography.body1.fontSize,
        [theme.breakpoints.up("sm")]: {
            fontSize: theme.typography.h6.fontSize,
        },
    },
    extraLargeButton: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        [theme.breakpoints.up("xs")]: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
    card: {
        boxShadow: theme.shadows[4],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("xs")]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(5.5),
            paddingBottom: theme.spacing(5.5),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.down("lg")]: {
            width: "auto",
        },
    },
    wrapper: {
        position: "relative",
        backgroundColor: theme.palette.secondary.main,
        paddingBottom: theme.spacing(2),
    },
    image: {
        maxWidth: "100%",
        verticalAlign: "middle",
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(9),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(3),
        },
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    waveBorder: {
        paddingTop: theme.spacing(4),
    },
});


function CarouselImages(props) {
    const { classes, theme } = props;

    return (
        <>
            <div className={classNames("lg-p-top", classes.wrapper)}>
                <div style={{ maxWidth: 600, width: '100%', margin: 'auto', paddingTop: 100 }}>
                    <Carousel>
                        <div>
                            <img alt="lines" src={Wayne9} />
                            <p className="legend">Make your own line</p>
                        </div>
                        <div>
                            <img alt="wayne" src={Wayne} />
                            <p className="legend">Carve your way down the mountain</p>
                        </div>
                        <div>
                            <img alt="wayne2" src={Wayne2} />
                            <p className="legend">Find your stash</p>
                        </div>
                        <div>
                            <img alt="alt" src={Wayne3} />
                            <p className="legend">Boost and learn new tricks</p>
                        </div>
                        <div>
                            <img alt="alt" src={Skyline} />
                            <p className="legend">Explore with friends</p>
                        </div>
                        <div>
                            <img alt="alt" src={Slingshot} />
                            <p className="legend">Learn how to get up on the board</p>
                        </div>
                        <div>
                            <img alt="alt" src={Leo} />
                            <p className="legend">Meet new friends</p>
                        </div>
                        <div>
                            <img alt="alt" src={Pow2} />
                            <p className="legend">Find Deep Powder</p>
                        </div>
                        <div>
                            <img alt="alt" src={Leo2} />
                            <p className="legend">Reach new heights</p>
                        </div>
                        <div>
                            <img alt="alt" src={Tourbine} />
                            <p className="legend">Ride big kites</p>
                        </div>
                        <div>
                            <img alt="alt" src={Wayne29} />
                            <p className="legend">Have fun, be free</p>
                        </div>
                        <div>
                            <img alt="alt" src={Snowmobile} />
                            <p className="legend">Get lines you never would have imagined</p>
                        </div>
                        {/* <div>
                            <img alt="alt" src={Skyline3} />
                            <p className="legend">Get fresh lines</p>
                        </div> */}
                        {/* <div>
                            <img alt="alt" src={Pow} />
                            <p className="legend">Find Deep Powder</p>
                        </div> */}

                    </Carousel>
                </div>
            </div>
            <WaveBorder
                upperColor={theme.palette.secondary.main}
                lowerColor="#FFFFFF"
                className={classes.waveBorder}
                animationNegativeDelay={2}
            />
        </>
    );

}

export default withWidth()(
    withStyles(styles, { withTheme: true })(CarouselImages)
);