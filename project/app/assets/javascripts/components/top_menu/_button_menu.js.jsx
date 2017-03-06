var ButtonMenu = React.createClass({
  render() {
      return (
        <li>
          <a
             href={this.props.href}
             onClick={this.props.patata}
             className={this.props.className}>{this.props.name}
          </a>
        </li>
             )
        }
});
