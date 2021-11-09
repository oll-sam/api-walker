import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Search from './components/Search';
import People from './components/People';
import Planet from './components/Planet';

    
function App() {

  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>Luke APIWalker</h1>
        <Link to='/'>Home</Link>
      </header>
      <Switch className="starWars">

        <Route exact path="/" >
        <Search>

        </Search>
        </Route>
        <Route exact path="/people/:id" >
          <People />
        </Route>
        <Route exact path="/planets/:id" >
          <Planet />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}
    
export default App;


