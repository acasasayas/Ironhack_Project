// var FontAwesome = require('react-fontawesome');
var RegisterUser = React.createClass({
  render() {
    return (
      <div id="register-user" className="container register-page">
          <div className="col-md-12 center">
            <h1>Registrarse</h1>
          </div>
            <div className="col-md-12 right">
                <label className="flex label-user" htmlFor="inputUser">Nick:</label>
                  <input type="text" className="form-user form-control" id="inputUser"></input>
          </div>
      </div>
    )
  }
});
