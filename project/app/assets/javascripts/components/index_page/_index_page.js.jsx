var IndexPage = React.createClass({
  render() {
    return (
        <div id="index-page" className="container-fluid index-page">
        	<div className="row">
        		<div className="col-md-12">
        			<div className="row">
        				<div className="col-md-2">
                  <LeftBar />
        				</div>
        				<div className="col-md-10 no-padding-left">
                  <div className="col-md-6 no-padding-left">
                    <ItemCenter />
                    <ItemCenter />
                    <ItemCenter />
                    <ItemCenter />
                    <ItemCenter />
          				</div>
                  <div className="col-md-6 no-padding-left no-padding-right">
                    <GoogleMaps />
          				</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
    )
  }
});
