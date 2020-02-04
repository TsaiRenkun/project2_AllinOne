var React = require("react");
var Layout = require("../layout/layoutTwo");

class schedule extends React.Component {
  render() {

    console.log(this.props);

    const cards = this.props.workouts.map(workout=>{
        let link = "/workoutlist/" + workout.id
        let dates = workout.name.toString().split(" ").slice(0, 4).join(" ");
        return(
        <div class="card text-center">
          <div class="card-header">
            {dates}
          </div>
          <div class="card-body">
            <h5 class="card-title">{workout.bodypart}</h5>
            <p class="card-text">RANDOM QUOTE</p>
            <a href={link} class="btn btn-primary">Plan <i class="fas fa-align-justify"></i></a>
          </div>
          <div class="card-footer text-muted">
          </div>
    </div>
    )
})

    return (
       <Layout username = {this.props.username}>
                        <div>
                            <div class= "topbox d-flex justify-content-center">
                                <div class = "parent calender">
                                <h1 class="display-2">Workouts</h1>
                                </div>
                            </div>
                            {cards}
                        </div>
    </Layout>

    );
  }
}

module.exports = schedule;