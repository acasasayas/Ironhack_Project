var TopMenu = React.createClass({
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-default navbar-fixed-top">
                 <div className="container-fluid">
                      <div className="navbar-header">
                     <a className="navbar-brand" href="#">IH Project</a>
                   </div>
                   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul className="nav navbar-nav navbar-right">
                       <ButtonMenu href="#myModal_login" name="Acceder"/>
                       <ButtonMenu href="el link2" name="Registrarse"/>
                       <ButtonMenu href="el link3" name="Usuario" className="hidden"/>
                       <ButtonMenu href="el link4" name="Cerrar sesión" className="hidden"/>
                       <ButtonMenu href="el link5" name="Quienes somos"/>
                       <ButtonMenu href="el link6" name="Condiciones"/>
                      </ul>
                   </div>
                 </div>
                </nav>
            </div>
          </div>
        </div>
    )
  }
});
