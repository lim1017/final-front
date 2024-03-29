import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./views/index.scss";

import 'mdbreact/dist/css/mdb.css';
import AdminLayout from "layouts/Admin.jsx";
import WelcomeLayout from "layouts/Welcome.jsx";


import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  axios.defaults.baseURL='https://final-back-production-9d1c.up.railway.app'
}

console.log(process.env.REACT_APP_API_BASE_URL, 'process')

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("id") !== null ? (
        <AdminLayout {...props} />
      ) : (
        <Redirect to="/welcome" />
      )
    }
  />
);

ReactDOM.render(


  <HashRouter>


    <Switch>

      <PrivateRoute
        path="/admin/"
        render={props => <AdminLayout {...props} />}
      />
          

      <Route path="/welcome" render={props => <WelcomeLayout {...props} />} />

      
 
      {localStorage.getItem("id") === null ? <Redirect to="/welcome" /> : <Redirect to="/welcome" /> }


    </Switch>



  </HashRouter>,
  document.getElementById("root")
);
