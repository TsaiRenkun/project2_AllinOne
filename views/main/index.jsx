var React = require("react");
var Layout = require("../layout/layoutTwo");
var Header = require("../loginPage/header");

class Home extends React.Component {
  render() {
    console.log(this.props);
    let link = this.props.imagelink
    let level = this.props.level
    let name = this.props.name

    return (

      <Layout username = {this.props.username}>
            <h1 class="display-2">Profile</h1>
            <div class="text-center">
             <img src={link} class="rounded" alt="..."/>
             <p>{name}</p>
             <form action = "/edit" method = "POST">
             <div class="form-group d-flex justify-content-center">
                <label for="exampleFormControlSelect1"></label>
                <select class="form-control levelbar" id="exampleFormControlSelect1" name="level">
                    <option value ='beginner'>Beginner</option>
                    <option value ='intermediate'>Intermediate</option>
                    <option value ='advance'>Advance</option>
                </select>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
              </form>
            </div>

      </Layout>
    );
  }
}

module.exports = Home;