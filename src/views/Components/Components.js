import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionContact from "./Sections/SectionContact";



import styles from "assets/jss/material-kit-react/views/components.js";

import TeamSection from "../LandingPage/Sections/TeamSection";
import SectionService from "./Sections/SectionService";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        brand="G e n I F ' I"
        changeColorOnScroll={{
          height: 400,
          color:"darkblue",
        }}
        {...rest}

      />
      <Parallax image={require("assets/img/ecommerceBg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}> G E N I F ' I </h1>
                <h3 className={classes.subtitle}>
                  Renforcez votre marque avec des sites Web génériques polyvalents.
                  Gagnez du temps et construisez-le en quelques minutes.♡
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <hr/>
        <TeamSection/>
        <hr/>
        <SectionNavbars/>
        <hr/>
          <SectionService/>
          <hr/>
          <SectionContact/>
      </div>

      <Footer />
    </div>
  );
}
