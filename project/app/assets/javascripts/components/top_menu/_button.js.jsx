var Button = React.createClass({
  showModal: function() {
    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  render : function(){
    return (
      <div>
        <button className="btn btn-default" onClick={this.showModal}>
            Show Modal
        </button>
        <Modal ref="modal" />
      </div>
    );
  }
});
