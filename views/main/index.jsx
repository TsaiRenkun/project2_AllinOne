var React = require("react");
var Layout = require("../layout/layoutTwo");
var Header = require("../loginPage/header");

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout username = {this.props.username}>
            <h1 class="display-2">Profile</h1>
            <div class="text-center">
             <img src="https://scontent.fsin6-1.fna.fbcdn.net/v/t1.0-9/11666254_10204093294523942_8750138288422148391_n.jpg?_nc_cat=102&_nc_ohc=8ERrdgfS4HwAX9l9LHF&_nc_ht=scontent.fsin6-1.fna&oh=4d970f3b3da3a7a5e29f731d12d53ad5&oe=5E8D68E6" class="rounded" alt="..."/>
             <p>Name</p>
             <div class="form-group d-flex justify-content-center">
                <label for="exampleFormControlSelect1"></label>
                <select class="form-control levelbar" id="exampleFormControlSelect1">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advance</option>
                </select>
              </div>
            </div>
      </Layout>
    );
  }
}

module.exports = Home;