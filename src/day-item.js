// Import some needed code
var React = require('react-native');
var Text = React.Text;

// Create our Component
var dayItem = React.createClass({
  render: function() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function() {
    return {
      fontSize: this.fontSize(),
      color: this.color(),
      fontWeight: this.fontWeight(),
      lineHeight: this.lineHeight()
    }
  },
  fontWeight: function() {
    return '' + (7 - this.props.daysUntil) * 100;
  },
  fontSize: function() {
    return 60 - 6 * this.props.daysUntil;
  },
  color: function() {
    var opacity = 1/(this.props.daysUntil + 1);
    return 'rgba(0, 0, 0, ' + opacity + ')';
  },
  lineHeight: function() {
    return 70 - 4 * this.props.daysUntil;
  }
})

// Make the component available somewhere else
module.exports = dayItem;
