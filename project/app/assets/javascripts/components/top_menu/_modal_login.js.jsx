var ModalLogin = React.createClass({
  showModal: function() {
     $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  render: function(){
    return (
      <div id="Modal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                titulo
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              cuerpo
            </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
});
