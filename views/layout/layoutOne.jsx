var React = require('react');
var Header = require('../loginPage/header');

class layout extends React.Component {
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
        <html>
            <Header>
            </Header>
                <body>
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
                    <div>
                        <h1 class ="display-1 text-center">Workout</h1>
                    </div>
                    <div class = "container-fluid">
                    {this.props.children}
                    </div>
                </body>
        </html>
        );
    }
}

module.exports = layout;