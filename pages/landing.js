import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Chatbot from "react-chatbot-kit";
import styles from "/styles/jss/nextjs-material-kit/pages/loginPage.js";
import config from "../components/chatbot/config.js";
import MessageParser from "../components/chatbot/MessageParser";
import ActionProvider from "../components/chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css';
import styled from "styled-components";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const chatStyles = makeStyles({

 container: {
  width:"800px"
  }
   });

export default function LandingPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [load,setload]=React.useState(false);
  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  const chatclasses = chatStyles();
  const { ...rest } = props;
  React.useEffect(()=>{
    setload(true);
  })
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="AI powered "
       // rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/chatbg.png')",
          //backgroundSize: "cover",
          //backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
       
            <GridItem xs={12} sm={6} md={6}>
              <Card className={classes[cardAnimaton]}>
            
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4  style={{fontWeight:500}}>Chat Bot</h4>
                   
                  </CardHeader>
                
                  <CardBody>
                  <div style={{ maxWidth: "600px" }}>
                    {load?
                    <div style={{textAlign:'center'}}>
                  <Chatbot 
                 className={chatclasses.container}
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      
      /></div>:null}
      </div>
                  </CardBody>
               {/*    <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                  </CardFooter> */}
             
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
