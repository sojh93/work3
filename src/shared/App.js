import "./App.css";
import React from "react";
import {Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configureStore.js"
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup"
import Header from "../components/Header";
import {Grid, Button} from "../elements";
import {actionCreators as userActions} from "../redux/modules/user";
import {useDispatch} from "react-redux";
import {apiKey} from "./firebase";
import Permit from "./Permit.js";


function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() => {
    // useEffect()는 Component Cycle의 Component Didmount와
    // Feed 업데이트를 동시해 수행하는 친구.
    if(is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, [])

  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+"></Button>
      </Permit>

    </React.Fragment>
   
  );
}

export default App;
