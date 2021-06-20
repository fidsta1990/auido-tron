import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Global from "./components/global/GlobalStyles";
import { Landing, Player } from "./pages";
import Layout from "./components/layout/Layout";
import Error from "./pages/Error";
function App() {
  return (
    <Router>
      <Layout>
        <Global />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/player" component={Player} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
