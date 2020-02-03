var React = require("react");
var Nav = require("../layout/layoutTwo");
var Header = require('../loginPage/header');




class singleworkout extends React.Component {
  render() {
    console.log(this.props)
    return (
        <html>
            <Header>
            </Header>
                <body>
                    <div class="row">
                        <div class="col-3">
                            <Nav username = {this.props.username}>
                            </Nav>
                    </div>
                        <div class="col-9">
                            <div class= "topbox d-flex justify-content-center">
                                <div class = "parent calender">
                                <h1 class="display-2">{exercisekey.name}</h1>
                                </div>
                            </div>
                            <div>
                                <p>{exercisekey.instructions}</p>
                            </div>
                        </div>
                    </div>
                 </body>
        </html>

    );
  }
}

module.exports = singleworkout;