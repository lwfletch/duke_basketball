import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return null;
}

function Players() {
  return <h2>Players</h2>;
}

function Schdule() {
  return <h2>Schedule</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/players/">players</Link>
            </li>
            <li>
              <Link to="/schdule/">schdule</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/players/" component={Players} />
        <Route path="/schdule/" component={Schdule} />
      </div>
    </Router>
  );
}

export default AppRouter;