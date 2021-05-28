import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const loginHandler=()=>{
    dispatch(authActions.login())
  }
  const logOutHandler=()=>{
    dispatch(authActions.logout())
  }
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} onLogout={logOutHandler} />
      {isLoggedIn ? <UserProfile /> : <Auth onLogin={loginHandler} />}
      <Counter />
    </Fragment>
  );
}

export default App;
