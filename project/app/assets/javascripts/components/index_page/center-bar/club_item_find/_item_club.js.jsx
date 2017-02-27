var ItemClub = React.createClass({
  render() {
    return (
      <div id="item-club" className="item-club container flex">
          <PhotoClub />
            <div>
              <p>
                <a className="info-find name-club" href="el link2">Nombre Club</a>
              </p>
              <p>
                <span className="info-find dir-club">Dirección: Calle, número, etc</span>
              </p>
              <button className="button-hour info-find google-color">10:00</button>
              <button className="button-hour info-find google-color">10:00</button>
              <button className="button-hour info-find google-color">10:00</button>
              <button className="button-hour info-find google-color">10:00</button>
              <button className="button-hour info-find google-color">10:00</button>
              <button className="button-hour info-find google-color">10:00</button>
            </div>
      </div>
    )
  }
});
