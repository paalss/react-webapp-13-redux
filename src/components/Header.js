import classes from "./Header.module.css";

const Header = (props) => {
  const logOutHandler=()=>{
    props.onLogout()
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {props.isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
