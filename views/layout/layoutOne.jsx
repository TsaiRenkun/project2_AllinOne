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
    loginOrLogOutPath = "/logout"
    loginOrLogOutName = "LogOut"

}


return(
        <html>
            <Header>
            </Header>
                <body>
                        <ul class="nav nav-pills flex-column">
                              <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/home">Schedule</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="">WorkOut</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link " href="#">Exercise</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link " href="#">Favourites</a>
                              </li>
                            </ul>
                                <a class="nav-link" href={loginOrLogOutPath}>{loginOrLogOutName}</a>
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