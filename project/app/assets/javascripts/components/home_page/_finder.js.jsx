var Finder = React.createClass({
  changeStateMain() {
    var parent = this._reactInternalInstance._currentElement._owner._instance;
    parent.changeStateMain();
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
            <ButtonFind myProp={this.changeStateMain} className="btn btn-lg btn-info btn-block full-width google-color" href="#" name="Buscar"/>
          </div>
        </div>
    )
  }
});
