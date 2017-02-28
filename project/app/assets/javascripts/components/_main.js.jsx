// var FontAwesome = require('react-fontawesome');
var Main = React.createClass({
  getInitialState: function(){
    return {
      status: "homepage"
    }
  },
  showState() {
    console.log(this.state);
  },
  renderContent() {
    if (this.state.status == "homepage") {
      return <HomePage />
    } else if (this.state.status == "indexpage") {
      return <IndexPage status="indexpage" />
    }
  },
  render() {
    return (
      <div>
          <TopMenu />
          <div id={this.state.status}>{this.renderContent()}</div>
          <h5>Status: {this.state.status}</h5>
      </div>
    )
  }
});
