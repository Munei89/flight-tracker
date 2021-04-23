import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_MAIN_INFO } from "./store/actionName/actionNames";
import MapPage from "./pages/MapPage";
import DetailsPage from "./pages/DetailsPage";
import { routers } from './config/router';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MAIN_INFO });
  }, [dispatch])

  return (

    <div>
      <Switch>
        <Route path={routers.MAPPAGE} exact component={MapPage} />
        <Route path={routers.DETAILSPAGE} component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
