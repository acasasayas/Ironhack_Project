var Main = React.createClass({
  render() {
    return (
      <div>
        <header>
          <TopMenu />
        </header>
        <div>
          <h1>MAIN</h1>
          <ModalLogin />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
});
