import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetUp from "./pages/AllMeetUp";
import Favourites from "./pages/Favourites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUp />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/new-meet-up">
          <NewMeetUp />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
