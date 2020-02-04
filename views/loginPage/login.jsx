var React = require('react');
var Header = require('./header');

class login extends React.Component {
  render() {
return(
        <html>
            <Header>
                <link rel="stylesheet" href="login.css"/>
            </Header>
                <body>
            <h1 class="display-2 logo">AllinOne<i class="fas fa-walking"></i></h1>
                <div class = "container login">
                    <div class = "d-flex justify-content-center">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
                      </li>
                    </ul>
                    </div>
                    <div class="tab-content d-flex justify-content-center" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                      <form method = "POST" action = "/login">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter Username"/>
                            <small id="nameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password"/>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                      </div>

                      <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">Register here
                            <form method = "POST" action = "/register">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" class="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter Username"/>
                                <small id="nameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" placeholder="Password"/>
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Level</label>
                                <select class="form-control levelbar" id="exampleFormControlSelect1" name = "level">
                                  <option value ='beginner'>Beginner</option>
                                  <option value ='intermediate'>Intermediate</option>
                                  <option value ='advance'>Advance</option>
                                </select>
                              </div>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                                </div>
                            </div>
                        </div>
                </body>
        </html>
        );
    }
}

module.exports = login;