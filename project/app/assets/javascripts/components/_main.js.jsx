// var FontAwesome = require('react-fontawesome');
var Main = React.createClass({

  getInitialState: function(){
    return {
      status: "home_page",
      modal: "on"
    }
  },

  showModal(status){
    this.setState({modal: status});
  },

  renderModal(){
    if (this.state.modal == "on") {
      return <Modal showModal={this.showModal}/>
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
          <TopMenu changeStatus={this.changeStatus} />
          {this.renderContent()}
          <h5>Status: {this.state.status} Status modal: {this.state.modal}</h5>
      </div>
    )
  }
});
