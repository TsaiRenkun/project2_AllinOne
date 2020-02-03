var React = require("react");
var Nav = require("../layout/layoutTwo");
var Header = require('../loginPage/header');




class exercise extends React.Component {
  render() {

    console.log(this.props);

    const cards = this.props.bodypart.map(part=>{
         let x  = "collapse" + part.id;
            let head = "heading" + part.id;
            let target = "#collapse" + part.id;



        return(
        <div class="card">
            <div class="card-header" id={head}>
              <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target={target} aria-expanded="true" aria-controls={x}>
                  {part.name}
                </button>
              </h5>
            </div>

            {this.props.exercise.map(move => {
                let link = "/exercise/" + move.id;
                if(move.bodypart_id === part.id){
                    return ( <div id={x} class="collapse" aria-labelledby={head} data-parent="#accordionExample">
                      <div class="card-body">
                          <a href={link} class="badge badge-light">{move.name}</a>
                      </div>
                    </div>
                    )
                }
            })
        }
        </div>
    )
})

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
                                <h1 class="display-2">Exercises</h1>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                            {cards}
                            </div>
                        </div>
                    </div>
                 </body>
        </html>

    );
  }
}

module.exports = exercise;