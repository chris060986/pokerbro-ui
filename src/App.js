import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Handhistory from './pages/Handhistory';
import Villains from './pages/Villains';

function Old() {
  return (
    <>
      <Router>
      <div className="App">
        <Header></Header>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Profile}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/handhistory' component={Handhistory}/>
          <Route path='/villains' component={Villains}/>
        </Switch>
      </div>
      </Router>
    </>
  );
}


function App() {
  return (
    <>
      <Router>
        <Header></Header>
          <Switch>
            <Route path='/' exact component={Profile}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
