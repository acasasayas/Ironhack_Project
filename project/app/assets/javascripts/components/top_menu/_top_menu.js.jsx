var TopMenu = React.createClass({

  showModal(event){
    event.preventDefault();
    this.props.changeStatus("register_user")
  },

  render() {
    return (
          <div className="row top-menu">
            <div className="col-md-12">
              <nav className="navbar navbar-default navbar-fixed-top white-color">
                 <div className="container-fluid">
                      <div className="navbar-header">
                     <a className="navbar-brand color-red" href="#">Play&Sports</a>
                   </div>
                   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul className="nav navbar-nav navbar-right">
                       <ButtonMenu href="#" patata={this.showModal} name="Acceder"/>
                       <ButtonMenu href="" name="Registrarse"/>
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
    )
  }
});
