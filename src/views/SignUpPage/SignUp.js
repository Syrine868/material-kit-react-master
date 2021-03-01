import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";



import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/backgroundLogin.jpg";
import {
    CheckBox,
    DateRange,
    ListAltOutlined,
    LockOpen,
    LockOpenOutlined,
    LockOutlined,
    Person,
    SecurityOutlined
} from "@material-ui/icons";
import {Checkbox} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SignUp(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="GenIF'I"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={6} sm={6} md={6}>

              <Card className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <p>Si vous ne disposez pas de compte <br/><b>veuillez remplir ce formulaire</b></p>
                  </CardHeader>
                  <CardBody>

                      <div className={classes.title}>
                            <h3>Informations personnelles</h3>
                          <hr/>
                      </div>
                    <CustomInput
                      labelText="Nom..."
                      id="nom"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Prénom..."
                      id="prenom"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <CustomInput
                      labelText="Data de naissance"
                      id="date"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <DateRange className={classes.inputIconsColor}>
                              lock_outline
                            </DateRange>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />

                    <div className={classes.title}>
                            <h3>Informations de contact</h3>
                        <hr/>
                    </div>
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
                      labelText="Téléphone..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "phone",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <div className={classes.title}>
                            <h3>Informations de compte</h3>
                        <hr/>
                    </div>
                      <CustomInput
                      labelText="Nom d'utilisateur..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Mot de passe..."
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlined className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Confirmer mot de passe ..."
                      id="confirmPwd"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlined className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <div className={classes.title}>
                            <h3>Etes-vous une propriétaire ?</h3>
                        <hr/>
                    </div>
                    <Checkbox
                        required
                      id="clientChk"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "checkbox",
                      }}
                    /> Propriétaire

                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button round color="primary" size="lg">
                       <LockOpenOutlined className={classes.socialIcons}/> Valider
                    </Button>
                  </CardFooter>
              </Card>

            </GridItem>


          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
