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
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
