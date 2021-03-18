import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        
          <Route path="/" exact>
            <Main/>
          </Route>
          <Route path="/login" exact>
            <LoginPage/>
          </Route>
          <Route path="/signup" exact>
            <SignupPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
