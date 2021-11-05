import './App.css';
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "./screens/Home";
import TournamentGrid from "./screens/TournamentGrid";


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/grid/:id">
                <TournamentGrid />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
