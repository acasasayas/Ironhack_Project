// var FontAwesome = require('react-fontawesome');
var Main = React.createClass({

  getInitialState: function(){
    return {
      status: "home_page",
      modal: "off"
    }
  },

  showModal(){
    this.setState({modal: "on"});
  },

  renderModal(){
    if (this.state.modal == "on") {
      return <Modal />
    }
  },

  showState(){
    console.log(this.state);
  },

  changeStatus(status){
    this.setState({status: status});
    console.log("change status ", status, this.constructor.displayName);
  },

  renderContent() {

    switch (this.state.status) {
      case "home_page":
      return <HomePage changeStatus={this.changeStatus}/>
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
      <div id="main">
          <TopMenu showModal={this.showModal} />
          {this.renderModal()}
          {this.renderContent()}
          <h5>Status: {this.state.status}</h5>
          <h5>Status modal: {this.state.modal}</h5>

      </div>
    )
  }
});
