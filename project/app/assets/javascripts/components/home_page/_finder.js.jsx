var Finder = React.createClass({

  changeStatus(){
    this.props.changeStatus("index_page")
  },

  render() {
    return (
        <div id="finder" className="container flex finder">
          <div className="finder-inbox">
            <label htmlFor="inputSport">Deporte</label>
            <input type="text" placeholder="A que quieres jugar...." className="inbox" id="inputUsernameEmail"></input>
          </div>
          <div className="finder-inbox">
            <label htmlFor="inputWhere">Donde</label>
            <input type="text" placeholder="Club, Población, ....." className="inbox" id="inputUsernameEmail"></input>
          </div>
          <div className="finder-inbox">
            <label htmlFor="inputWhen">Cuándo</label>
            <input type="text" placeholder="Elije el día..." className="inbox" id="inputUsernameEmail"></input>
          </div>
          <div className="finder-inbox vaaa">
            <ButtonFind onClick={this.changeStatus} className="btn btn-lg btn-info btn-block full-width google-color" href="#" name="Buscar"/>
          </div>
        </div>
    )
  }
});
