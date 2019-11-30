import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import axios from "./axios";

import HomeScreen from "./containers/HomeScreen";
import AdminScreen from "./containers/AdminScreen";
import LoginScreen from "./containers/LoginScreen";
import CheckImageScreen from './containers/CheckImageScreen';
import UploadImageScreen from './containers/UploadImageScreen';
import AddUserScreen from './containers/AddUserScreen';
import ChangePassword from './containers/ChangePassword';

import {Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    username: '',
    id: ''
  };

  componentDidMount() {
    //check login
    const access_token = window.localStorage.getItem("access_token")
    axios.get("http://localhost:6969/api/auth/check?access_token="+access_token)
      .then(response => {
        if(response.data.success){
          this.setState({
            username: response.data.user.username,
            id: response.data.user.id
          });
        }else {
          this.props.history.push("/login")
        }
      }).catch(error =>{
        console.log(error)
      })
  }

  _onLogin = (username, password) => {
    axios
      .post("http://localhost:6969/api/auth/login", {
        username: username,
        password: password
      })
      .then(response => {
        if (response.data.success){
          window.localStorage.setItem("access_token", response.data.access_token)
          this.setState({
            username: response.data.user.username,
            id: response.data.user.id
          });
          this.props.history.push("/");
        } else {
          alert(response.data.message)
        }
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return <HomeScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/checkimage"
              render={props => {
                return <CheckImageScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/uploadimage"
              render={props => {
                return <UploadImageScreen
                  {...props}
                  username={this.state.username}
                  id = {this.state.id}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/admin"
              render={props => {
                return <AdminScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/login"
              render={props => {
                if(this.state.username){
                  props.history.push("/");
                  return "";
                }
                return <LoginScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/admin/adduser"
              render={props => {
                return <AddUserScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/admin/changepassword"
              render={props => {
                return <ChangePassword
                />;
              }}
            />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
