/*eslint-disable*/
import React, {useState, useRef, useEffect} from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
    HomeRounded,
    InfoRounded,
    ShoppingCart,
    Group,
    LockOutlined, PeopleAltOutlined
} from "@material-ui/icons";

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();

        return (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <a href="#" className={classes.navLink}>
                        <HomeRounded className={classes.icons}/> Home
                    </a>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("About")} className={classes.navLink}>
                        <InfoRounded className={classes.icons}/> About us
                    </a>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("Team")} className={classes.navLink}>
                        <PeopleAltOutlined className={classes.icons}/> Team
                    </a>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("Products")} className={classes.navLink}>
                        <ShoppingCart className={classes.icons}/> Products
                    </a>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("Services")} className={classes.navLink}>
                        <Group className={classes.icons}/> Services
                    </a>
                </ListItem>
                   <ListItem className={classes.listItem}>
                    <a onClick={() => scrollTo("Contacts")} className={classes.navLink}>
                        <Group className={classes.icons}/> Contacts
                    </a>
                </ListItem>
                <ListItem className={classes.listItem}>

                    <a href="/login-page">
                        <Button color="info" round>
                            <LockOutlined className={classes.icons}/>Login</Button>
                    </a>
                </ListItem>

            </List>
        );
    }

