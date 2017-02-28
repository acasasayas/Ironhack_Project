var HomePage = React.createClass({
  render() {
    return (
        <div id="home-page" className="container flex home-page home">
          <div className="center-box top-main">
            <h1><span>Quieres hacer deporte y</span><span className="color-red"> necesitas una pista?</span></h1>
            <div className="center-box">
              <span className="img1">
                <Img title="Padel" className="image-home" src="/assets/padel.png" width="200" height="200"/>
              </span>
              <span className="img1">
                <Img className="image-home" src="/assets/golf.jpg" width="200" height="200"/>
              </span>
              <span className="img1">
                <Img className="image-home" src="/assets/futbol.jpg" width="200" height="200"/>
                </span>
            </div>
            <Finder changeStatus={this.props.changeStatus}/>
          </div>
        </div>
    )
  }
});
