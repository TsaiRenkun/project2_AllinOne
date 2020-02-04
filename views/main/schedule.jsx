var React = require("react");
var Layout = require("../layout/layoutTwo");




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
        <Layout username = {this.props.username}>
                        <div>
                            <div class= "topbox d-flex justify-content-center">
                                <div class = "parent calender">
                                </div>
                            </div>
                            <a href = "#" class="btn btn-success btn-block mt-3" id = "submit_btn">Submit</a>
                            <div class = "parent bottombox">
                                  {part}
                            </div>
                        </div>
                    <script src="/script.js"></script>
                    </Layout>

    );
  }
}

module.exports = schedule;