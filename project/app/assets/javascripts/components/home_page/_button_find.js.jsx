var ButtonFind = React.createClass({
    myClick: function () {
        alert(this.props);
        /*Busca la info de la API con los datos que hemos introducido*/
    },
    render: function() {
        return <button className={this.props.className}>{this.props.name}</button>;
    }
});
