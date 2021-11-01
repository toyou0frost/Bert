import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            {/* 검색 페이지 */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;