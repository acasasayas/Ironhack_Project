var Button = React.createClass({
  showModal: function() {
     $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  render: function(){
    return (
      <div>
        <li><a href={"#Modal"} data-toggle="modal" className={this.props.className}>modal</a></li>
        <button className="btn btn-default" onClick={this.showModal}>
            Show Modal
        </button>
        <Modal ref="modal" />
      </div>
    );
  }
});
