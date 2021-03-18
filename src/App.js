import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
