var ButtonMenu = React.createClass({
  render() {
      return (
        <li><a href={this.props.href} data-toggle={this.props['data-toggle']} className={this.props.className}>{this.props.name}</a></li>
             )
        }
});
