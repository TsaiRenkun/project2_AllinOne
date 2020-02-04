var React = require("react");
var Layout = require("../layout/layoutTwo");
var Header = require('../loginPage/header');

class instruction extends React.Component {
  render() {
    let exercisekey = this.props.exercise[0]
    return (
    <Layout username = {this.props.username}>
                        <div>
                            <div class= "topbox d-flex justify-content-center">
                                <div class = "parent calender">
                                <h1 class="display-2">{exercisekey.name} </h1> <i class="far fa-thumbs-up fa-3x like_btn"></i>
                                </div>
                            </div>
                            <div>
                                <p>{exercisekey.instructions}</p>
                            </div>
                        </div>

                    <script src = "/checkFav.js"></script>
                    <script src="/like.js"></script>
        </Layout>
    );
  }
}

module.exports = instruction;