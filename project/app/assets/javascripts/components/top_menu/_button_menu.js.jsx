var ButtonMenu = React.createClass({
  render() {
      return (
        <li><a href={this.props.href} className={this.props.className}>{this.props.name}</a></li>
             )
        }
});
