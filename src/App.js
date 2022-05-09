import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
import CBA from "./Cba"
import Blog from "./Blog"
import BlogDetails from './BlogDetails'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/cba">
              <CBA />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
