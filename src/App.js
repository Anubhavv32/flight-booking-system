import react from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Route, Redirect } from 'react-router-dom';
import Login from'./Login/Login';
import Signup from './Admin/Signup';
import Admin from './Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {/* <Route path="/" exact component={reduxForm} ></Route> */}
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            {/* <Route path="/flight" component={Information} />
            <Route path="/book-flight" component={Information} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
