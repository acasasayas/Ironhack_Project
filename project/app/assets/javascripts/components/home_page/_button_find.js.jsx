var ButtonFind = React.createClass({
    myClick: function () {
        ReactDOM.unmountComponentAtNode(document.getElementById('home-page'));
        $("#home-page").addClass("hidden");
        $("#index-page").removeClass("hidden");
        /*Busca la info de la API con los datos que hemos introducido*/
    },
    render: function() {
        return <button className={this.props.className} onClick={this.myClick}>{this.props.name}</button>;
    }
});
