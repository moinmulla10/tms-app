import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { CardActionArea, Typography } from "@material-ui/core";
import background from "../assets/download.jpg";
import logo from "../assets/afour_logo.png";
import GoogleLogin from "react-google-login";
import "./Login.css";

class Login extends Component {
  responseGoogle = reponse => {
    console.log(reponse);
  };
  render() {
    return (
      <div>
        <div className="banner-bg"></div>
        <div className="login-center">
          <Card className="login-box">
            <CardMedia image={background} className="banner-bg-card">
              <div className="logo-center">
                <img className="logo-img" src={logo} alt="AFourLogo" />
              </div>
            </CardMedia>

            <CardActionArea className="card-action-area">
              <h1 className="title">AFour Employee Portal</h1>
              <p className="tagline">
                Sign in with your google account to access all employee service
              </p>
            </CardActionArea>
            <CardActions className="btn-center">
              <GoogleLogin
                clientId="374150523896-9g8v5kmtg19jbl22p1n2e2t0r0tt0g3k.apps.googleusercontent.com"
                className="google-btn"
                responseType="code"
                cookiePolicy="single_host_origin"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              ></GoogleLogin>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
