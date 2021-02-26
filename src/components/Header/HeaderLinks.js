/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, HomeRounded,
         ImageRounded , InfoRounded ,
        EventRounded, RoomService, LockOpenOutlined} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import CardFooter from "../Card/CardFooter";
import GridItem from "../Grid/GridItem";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a href="" className={classes.navLink}>
           <HomeRounded className={classes.icons} /> Accueil
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
          <a href="" className={classes.navLink}>
           <InfoRounded className={classes.icons} /> A propos
        </a>
      </ListItem>

      <ListItem className={classes.listItem}>
          <a href="" className={classes.navLink}>
           <ImageRounded className={classes.icons} /> Galeries
        </a>
      </ListItem>

        <ListItem className={classes.listItem}>
          <a href="" className={classes.navLink}>
           <EventRounded className={classes.icons} /> Evénements
        </a>
      </ListItem>

        <ListItem className={classes.listItem}>
          <a href="" className={classes.navLink}>
           <RoomService className={classes.icons} /> Services
        </a>
      </ListItem>
        
        <ListItem className={classes.listItem}>

              <Button color="rose" round>
                  <LockOpenOutlined className={classes.icons} />Login</Button>

      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Contactez-nous sur facebook"
          placement={window.innerWidth > 970 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
