var React = require('react');
var Header = require('../loginPage/header');

class nav extends React.Component {
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
     <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>ALlinOne</title>
          <script src="https://kit.fontawesome.com/a2b57747b4.js" crossorigin="anonymous"></script>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/design.css" />
          <link rel="stylesheet" href="/schdesgin.css" />
        </head>
        <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a id="navbar-brand" className="navbar-brand" href="/home">
              AllinOne <i class="fas fa-walking"></i>
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
          {this.props.children}
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          ></script>
        </body>
      </html>
    );
  }
}


module.exports = nav;