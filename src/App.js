import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { Component } from 'react';

// components required
import ImageUpload from './Components/ImageUpload'
import ShowImage from './Components/ShowImage'
import PageNotFound from './Components/404'
import CaptureImage from './Components/captureImage'
 
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ImageUpload} />
          <Route exact path="/showImage" component={ShowImage} />
          <Route exact path="/captureImage" component={CaptureImage} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404 " />
        </Switch>
      </Router>
    )
  };
}

export default (App);
