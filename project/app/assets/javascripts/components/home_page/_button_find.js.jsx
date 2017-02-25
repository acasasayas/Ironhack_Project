var ButtonFind = React.createClass({
    myClick: function () {
        alert("Hello World!");
    },
    render: function() {
        return <button className={this.props.className} onClick={this.myClick}>{this.props.name}</button>;
    }
});
