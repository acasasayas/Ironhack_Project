var ModalLogin = React.createClass({
  showModal: function() {
     $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  render: function(){
    return (
      <div id="Modal" className="modal fade">
        <div className="modal-dialog main">
          <div className="modal-content">
            <div className="modal-header">
              IH Project
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <h3>Por favor accede, o <a href="#">Registrate</a></h3>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="#" className="btn btn-lg btn-primary btn-block full-width">Facebook</a>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="#" className="btn btn-lg btn-info btn-block full-width google-color">Google</a>
                    </div>
                  </div>
                  <div className="login-or">
                    <hr className="hr-or"></hr>
                    <span className="span-or">o</span>
                  </div>
                  <form role="form">
                    <div className="form-group">
                      <label htmlFor="inputUsernameEmail">Email:</label>
                      <input type="text" className="form-control" id="inputUsernameEmail"></input>
                    </div>
                    <div className="form-group">
                      <a className="pull-right" href="#">Olvidaste tu contraseña?</a>
                      <label htmlFor="inputPassword">Password:</label>
                      <input type="text" className="form-control" id="inputUsernameEmail"></input>
                    </div>
                    <div className="checkbox pull-right">
                      <label><input type="checkbox"></input>Recuerdame</label>
                    </div>
                    <button type="submit" className="btn btn btn-primary">
                      Acceder
                    </button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
});
