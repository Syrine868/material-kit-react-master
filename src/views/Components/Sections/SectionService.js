import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import {ArrowRightAltOutlined} from "@material-ui/icons";

import ServiceLogo from "assets/img/ImageService.jpg";

const useStyles = makeStyles(styles);

export default function SectionService() {
    const classes = useStyles();
    return (
        <div className={classes.section}>

            <div className={classes.container}>
                <h2 className={classes.title}>Lancer vos services</h2>
                <GridContainer>
                    <GridItem xs={7} sm={7} md={7}>
                        <div className={classes.title}>
                            <h3>Ce qu'on offre</h3>
                        </div>
                        <CustomTabs
                            color="info"
                            tabs={[
                                {
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Grâce à notre application, vous pouvez créer et configurer
                                            votre propre site contenant vos services que vous allez
                                            l'offrir tout en utilisant un design ergonomique et des
                                            élements riches.
                                            <br/>
                                            <b> Pour lancer votre activité, il suffit de cliquer sur le bouton çi
                                                dessous.</b>
                                            <br/>
                                            <ListItem className={classes.listItem}>

                                                <a href="/">
                                                    <Button color="rose" round sm>
                                                        <ArrowRightAltOutlined className={classes.icons}/>Démarrer</Button>
                                                </a>
                                            </ListItem>
                                        </p>

                                    ),

                                },

                            ]}
                        />
                    </GridItem>
                    <GridItem xs={5} sm={5} md={5}>
                            <img src={ServiceLogo} size="md"/>
                    </GridItem>
                </GridContainer>
            </div>

        </div>
    );
}
