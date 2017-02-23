var ModalLogin = React.createClass({
  render() {
    return (
      <div className="modal fade" id="myModal_login" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h3>Accede con tu email o <a href="#">Registrate</a></h3>
                        <div className="row">
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
                          </div>
                        </div>
                        <div className="login-or">
                            <hr className="hr-or"></hr>
                            <span className="span-or">o</span>
                        </div>
                  </div>
              </div>
            </div>
        </div>
    )
  }
});
