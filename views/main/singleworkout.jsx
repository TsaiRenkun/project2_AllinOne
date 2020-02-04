var React = require("react");
var Layout = require("../layout/layoutTwo");

class singleworkout extends React.Component {
  render() {
    console.log(this.props.workout)
    let single = this.props.workout[0]
    let dates = single.date.toString().split(" ").slice(0, 4).join(" ");

    let list = this.props.workout.map(move => {
        let link = "/exercise/" + move.id;
        return (
            <div class="card-body">
                <a href={link} class="badge badge-light">{move.name} 15 x 3 SETS</a>
            </div>
            )
        })
    return (
       <Layout username = {this.props.username}>
                        <div>
                            <div class= "topbox d-flex justify-content-center">
                                <div class = "parent calender">
                                <h1 class="display-2">{dates}</h1>
                                </div>
                            </div>
                            <div>
                                {list}
                            </div>
                        </div>
</Layout>

    );
  }
}

module.exports = singleworkout;