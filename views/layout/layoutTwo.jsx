var React = require('react');
var Header = require('../loginPage/header');

class nav extends React.Component {
  render() {

    var loginOrLogOutPath;
    var loginOrLogOutName;
if(this.props.username === undefined){
    loginOrLogOutPath = "/"
    loginOrLogOutName = "LogIn"
} else {
    loginOrLogOutPath = "/logOut"
    loginOrLogOutName = "LogOut"
}

return(
                    <div class = "container">
                        <ul class="nav nav-pills flex-column">
                              <li class="nav-item">
                                <a class="nav-link active" href="/home">Home</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/schedule">Schedule</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/workoutlist">WorkOut</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link " href="/exercise">Exercise</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link " href="#">Favourites</a>
                              </li>
                            </ul>
                            <form Method = "POST" action = {loginOrLogOutPath}>
                                <button type="submit" class="btn btn-primary">LogOut</button>
                            </form>
                        </div>
        );
    }
}

module.exports = nav;