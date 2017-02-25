var HomePage = React.createClass({
  render() {
    return (
        <div className="container flex home-page">
          <div className="center-box">
            <h1>Quieres hacer deporte y necesitas una pista?</h1>
            <div className="center-box">
              <Img className="image-home" src="/assets/padel.png" width="200" height="200" />
              <Img className="image-home" src="/assets/golf.jpg" width="200" height="200"/>
              <Img className="image-home" src="/assets/futbol.jpg" width="200" height="200"/>
            </div>
          </div>
        </div>
    )
  }
});
