var ButtonMenu = React.createClass({
  render() {
      return (
        <li>
          <a
             href={this.props.href}
             onClick={this.props.onClick}
             className={this.props.className}>{this.props.name}
          </a>
        </li>
             )
        }
});
