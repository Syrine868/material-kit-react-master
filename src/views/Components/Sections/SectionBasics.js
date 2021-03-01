import React from "react";
// plugin that creates slider
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import People from "@material-ui/icons/People";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import image from "assets/img/LOGO QUAD.png";
import {StarBorderOutlined} from "@material-ui/icons";
const useStyles = makeStyles(styles);

export default function SectionBasics() {
    const classes = useStyles();


    return (
<div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={7} sm={7} md={7}>
            <h2 className={classes.title}>Qui sommes-nous ?</h2>
                <br/>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Quad Squad",
                    tabIcon: People,
                    tabContent: (
                      <p className={classes.textCenter}>
                            <b>Quad Squad</b> est une équipe composée de 4 personnes,
                          destinée à développer des applications en utilisant des technologies
                          récentes.
                      </p>
                    )
                  },
                  {
                    tabName: "Mission",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                          Notre objectif vise à mettre des templates pré-existantes pour nos clients
                          afin de l'exploiter dans leur domaine aprés avoir introduit leur contenu
                          sans écrire du code mais en choisissant et déplaçant les éléments qui leur
                          convient mieux.
                      </p>
                    )
                  },
                  {
                    tabName: "Objectifs",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>

                          <StarBorderOutlined className={classes.icon}/>Design ergonomique.
                          <br/>
                        <StarBorderOutlined className={classes.icon}/>
                          Elements fléxibles et configurables.
                          <br/>
                        <StarBorderOutlined className={classes.icon}/>
                          Donner la possibilité au propriétaire du site pour manipuler ces éléments.


                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={5} sm={5} md={5} justify="center">
                <br/>
                <img src={image}/>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    );
}
