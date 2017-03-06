var FinderLeftBar = React.createClass({
  render() {
    return (
      <div id="finder-left-bar">
          <p>
            <label htmlFor="inputSport">Deporte</label>
            <input type="text" placeholder="A que quieres jugar...." className="inbox" id="inputUsernameEmail"></input>
          </p>
          <p>
            <label htmlFor="inputWhere">Donde</label>
            <input type="text" placeholder="Club, Población, ....." className="inbox" id="inputUsernameEmail"></input>
          </p>
          <p>
            <label htmlFor="inputWhen">Cuándo</label>
            <input type="text" placeholder="Elije el día..." className="inbox" id="inputUsernameEmail"></input>
          </p>
          <ButtonFind className="btn btn-lg btn-info btn-block full-width google-color" href="#" name="Buscar"/>
      </div>
    )
  }
});
