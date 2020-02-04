var React = require('react');
var Header = require('../loginPage/header');

class layout extends React.Component {
  render() {
    let home;
    let schedule;
    let workOut;
    let exercise;
    let favorites;
    let loginButton;
    let logoutButton;
    let registerButton;
    let loginOrLogOutPath;
    let loginOrLogOutName;
if(this.props.username === undefined){
    loginOrLogOutPath = "/"
    loginOrLogOutName = "LogIn"
    loginButton = (
        <a href="/login">
          <button className="btn btn-login mr-2">
            Log in <i className="fas fa-sign-in-alt"></i>
          </button>
        </a>
      );
      registerButton = (
        <a href="/register">
          <button className="btn btn-login">
            Register <i className="fas fa-user-plus"></i>
          </button>
        </a>
        );
} else {
      home = (
        <li className="nav-item">
          <a className="nav-link" href="/home">
            Home
          </a>
        </li>
      );
      schedule = (
        <li className="nav-item">
          <a className="nav-link" href="/schedule">
            Schedule
          </a>
        </li>
      );
      workOut = (
        <li className="nav-item">
          <a className="nav-link" href="/workOutlist">
            WorkOut
          </a>
        </li>
      );
      exercise = (
        <li className="nav-item">
          <a className="nav-link" href="/exercise">
            Exercise
          </a>
        </li>
      );
      favorites = (
        <li className="nav-item">
          <a className="nav-link" href="/favorites">
            Favorites
          </a>
        </li>
      );
      logoutButton = (
        <a href="/logout">
          <button className="btn btn-login">
            Log out <i className="fas fa-sign-out-alt"></i>
          </button>
        </a>
      );
    }

return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a id="navbar-brand" className="navbar-brand" href="/">
              AllinOne <i class="fal fa-walking"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                {home}
                {schedule}
                {workOut}
                {exercise}
                {favorites}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/bars/sort/created">
                      Newly created
                    </a>
                    <a className="dropdown-item" href="/bars/sort/modified">
                      Newly modified
                    </a>
                  </div>
                </li>
              </ul>
              <form
                action="/search"
                method="GET"
                className="form-inline my-2 my-lg-0"
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  name="search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-search my-2 my-sm-0 mr-2"
                  type="submit"
                >
                  Search
                </button>
              </form>
              {loginButton}
              {registerButton}
              {logoutButton}
            </div>
          </nav>
        );
    }
}

module.exports = layout;