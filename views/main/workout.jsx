var React = require("react");
var Nav = require("../layout/layoutTwo");
var Header = require('../loginPage/header');




class schedule extends React.Component {
  render() {

    console.log(this.props);

    const cards = this.props.workouts.map(workout=>{
        return(
        <div class="card text-center">
          <div class="card-header">
            {workout.name}
          </div>
          <div class="card-body">
            <h5 class="card-title">{workout.bodypart}</h5>
            <p class="card-text">RANDOM QUOTE</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">
          </div>
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
                        <div class="col-9">
                            <div class= "topbox d-flex justify-content-center">
                                <div class = "parent calender">
                                <h1 class="display-2">Workouts</h1>
                                </div>
                            </div>
                            {cards}
                        </div>
                    </div>
                 </body>
        </html>

    );
  }
}

module.exports = schedule;