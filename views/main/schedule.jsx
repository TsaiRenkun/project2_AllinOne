var React = require("react");
var Nav = require("../layout/layoutTwo");
var Header = require('../loginPage/header');




class schedule extends React.Component {
  render() {

    console.log(this.props);
    const part = this.props.bodyparts.map(bodypart=>{
        return (
            <div class="parts" id={bodypart.id} draggable='true' value = {bodypart.id}>
                                    {bodypart.name}
                                  </div>
                                  )
    })

    return (
        <html>
            <Header>
                <link rel="stylesheet" href="schdesgin.css"/>
            </Header>
                <body>
                    <div class="row">
                        <div class="col-3">
                            <Nav username = {this.props.username}>
                            </Nav>
                    </div>
                        <div class="col-9">col-8
                            <div class= "topbox">
                                <div class = "parent calender">
                                </div>
                                <div class = "parent bottombox">
                                  {part}
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="/script.js"></script>
                 </body>
        </html>

    );
  }
}

module.exports = schedule;