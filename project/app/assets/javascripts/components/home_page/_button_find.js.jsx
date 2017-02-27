var ButtonFind = React.createClass({
    myClick: function () {
        ReactDOM.unmountComponentAtNode(document.getElementById('home-page'));
        alert("Hello World!");
    },
    render: function() {
        return <button className={this.props.className} onClick={this.myClick}>{this.props.name}</button>;
    }
});
