// Import some needed code
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;

var DayItem = require('./src/day-item');

// Create react Component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var dayItems = [];
    for(var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(<DayItem day={day} daysUntil={i} />)
    }
    return dayItems;
  }
});

// Create Styles for the Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show Component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays;
});
