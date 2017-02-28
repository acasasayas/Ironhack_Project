// var FontAwesome = require('react-fontawesome');
var Main = React.createClass({
  getInitialState: function(){
    return {
      status: "home_page"
    }
  },
  showState() {
    console.log(this.state);
  },
  renderContent() {
    switch (this.state.status) {
      case "home_page":
      return <HomePage />
      break;
      case "index_page":
      return <IndexPage />
      break;
      case "register_user":
      return <RegisterUser />
      break;
      default:
    }

  },
  render() {
    return (
      <div>
          <ModalLogin />
          <TopMenu />
          {this.renderContent()}
          <h5>Status: {this.state.status}</h5>
      </div>
    )
  }
});
