import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { CardActionArea, Typography } from "@material-ui/core";
import background from "../assets/download.jpg";
import googleSignIn from "../assets/google_sign_in.png";
import GoogleLogin from "react-google-login";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="banner-bg"></div>
          <div className="login-center">
            <Card className="login-box">
              <CardMedia
                image={background}
                className="banner-bg-card"
              ></CardMedia>
              <CardActionArea className="card-action-area">
                <h1 className="title">AFour Employee Portal</h1>
                <p className="tagline">
                  Sign in with your google account to access all employee
                  service
                </p>
              </CardActionArea>
              <CardActions className="btn-center">
                <GoogleLogin className="google-btn"></GoogleLogin>
              </CardActions>
            </Card>
          </div>
        </div>
    );
  }
}

export default Login;
