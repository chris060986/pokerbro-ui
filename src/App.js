import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Handhistory from './pages/Handhistory';
import Villains from './pages/Villains';
import Support from './pages/Support';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Box style={{ marginLeft: "70px", padding: "10px", display: "inline-block"}}>
          <Switch>
            <Route path='/' exact component={Profile}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/handhistory' component={Handhistory}/>
            <Route path='/villains' component={Villains}/>
            <Route path='/support' component={Support}/>
          </Switch>
        </Box>
      </Router>
    </>
  );
}

export default App;
