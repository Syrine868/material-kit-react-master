import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import ReactGoogleMapLoader from "react-google-maps-loader";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import {MessageRounded, SendRounded} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionContact() {


  const classes = useStyles();
  return (
    <div className={classes.section}>

      <div className={classes.container}>
  <h2 className={classes.title}>Espace Contact</h2>
        <br/>
        <GridContainer justify="center">
          <GridItem xs={4} sm={4} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Pour plus d'informations, merci de remplir le formulaire.</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Prénom..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                   <CustomInput
                    labelText="Nom..."
                    id="last"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Adresse email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />

                  <CustomInput
                      labelText="Laissez votre message..."
                    id="msg"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "textarea",
                        rowsMax:"20",
                        cols:"38.5",
                        endAdornment: (
                        <InputAdornment position="end">
                          <MessageRounded className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  >

                  </CustomInput>

                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button round color="primary" size="md">
                    <SendRounded className={classes.icons} /> Envoyer
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>

        <GridItem xs={8} sm={8} md={8}>
            <ReactGoogleMapLoader
    params={{
        key: 'AIzaSyA0yliWaf8ymmQnzy2MqrI9IkbbFzYW2b4', // Define your api key here
        libraries: "places,geometry", // To request multiple libraries, separate them with a comma
    }}
    render={(googleMaps, error) =>
        googleMaps ? (
            <div>
                {/*Show a custom error if SDK Authentication Error. See N/B 2 below.*/}
                {error ? error : "Google Maps is loaded !"}
            </div>
        )   :   (
            <div>
                {/*Check for network error so loading state ends if user lost connection.*/}
                {error === "Network Error" ? <p>{error}</p> : <p>isLoading...</p>}
            </div>
        )
    }/>
        </GridItem>

        </GridContainer>

      </div>
    </div>
  );
}
