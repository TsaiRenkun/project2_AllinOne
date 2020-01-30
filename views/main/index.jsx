var React = require("react");
var Layout = require("../layout/layoutOne");

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout username = {this.props.username}>
      </Layout>
    );
  }
}

module.exports = Home;