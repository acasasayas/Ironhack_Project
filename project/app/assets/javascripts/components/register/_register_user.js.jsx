// var FontAwesome = require('react-fontawesome');
var RegisterUser = React.createClass({
  render() {
    return (
      <div id="register-user" className="container register-page">
          <div className="col-md-12 center">
            <h1>Registrarse</h1>
          </div>
            <div className="col-md-12 right">
                <label className="flex" htmlFor="inputUser">Nick:<input type="text" className="form-control" id="inputUser"></input></label>
                <label className="flex" htmlFor="inputUser">Nombre:<input type="text" className="form-control" id="inputUser"></input></label>
                <label className="flex" htmlFor="inputUser">Apellidos:<input type="text" className="form-control" id="inputUser"></input></label>
                <label className="flex" htmlFor="inputUser">Email:<input type="text" className="form-control" id="inputUser"></input></label>
                <label className="flex" htmlFor="inputUser">Confirmación Email:<input type="text" className="form-control" id="inputUser"></input></label>
                
          </div>
      </div>
    )
  }
});
