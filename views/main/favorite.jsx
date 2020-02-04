var React = require("react");
var Layout = require("../layout/layoutTwo");


class fav extends React.Component {
  render() {

    console.log(this.props)
    const cards = this.props.favData || this.props.favData.map(fav => {
        let link = "/exercise/" + fav.exercise_id;
       return( <div class="card" style={{width: "18rem;"}}>
              <div class="card-body">
                <h5 class="card-title">{fav.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <a class="card-link"><i class="far fa-thumbs-up like_btn"></i></a>
                <a href={link} class="card-link">Instructions</a>
              </div>
            </div>
        )
    })

    return (
    <Layout username = {this.props.username}>
            <h1>welcome to the fav</h1>
            <div class = "container-fluid">
            {cards}
            </div>
    </Layout>
    );
  }
}

module.exports = fav;