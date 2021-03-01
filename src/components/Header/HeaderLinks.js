/*eslint-disable*/
import React, {useState, useRef, useEffect} from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
    Apps,
    HomeRounded,
    ImageRounded,
    InfoRounded,
    EventRounded,
    RoomService,
    LockOpenOutlined,
    ShoppingCartSharp,
    Category,
    ShoppingCart,
    Send,
    Group,
    SubscriptionsRounded, LockOutlined, PeopleAltOutlined
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();

        return (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <a href="#" className={classes.navLink}>
                        <HomeRounded className={classes.icons}/> Accueil
                    </a>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("about")} className={classes.navLink}>
                        <InfoRounded className={classes.icons}/> A propos
                    </a>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("equipe")} className={classes.navLink}>
                        <PeopleAltOutlined className={classes.icons}/> Equipe
                    </a>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("produits")} className={classes.navLink}>
                        <ShoppingCart className={classes.icons}/> Produits
                    </a>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("services")} className={classes.navLink}>
                        <Group className={classes.icons}/> Services
                    </a>
                </ListItem>
                <ListItem className={classes.listItem}>

                    <a href="/login-page">
                        <Button color="primary" round>
                            <LockOutlined className={classes.icons}/>Login</Button>
                    </a>
                </ListItem>
            </List>
        );
    }

