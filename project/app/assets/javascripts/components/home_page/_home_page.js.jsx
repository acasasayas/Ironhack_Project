var HomePage = React.createClass({
  render() {
    return (
        <div id="home-page" className="container flex home-page home">
          <div className="center-box top-main">
            <h1><span>Quieres hacer deporte y</span><span className="color-red"> necesitas una pista?</span></h1>
            <div className="center-box">
              <Img className="image-home" src="/assets/padel.png" width="200" height="200" />
              <Img className="image-home" src="/assets/golf.jpg" width="200" height="200"/>
              <Img className="image-home" src="/assets/futbol.jpg" width="200" height="200"/>
            </div>
            <Finder />
          </div>
        </div>
    )
  }
});
