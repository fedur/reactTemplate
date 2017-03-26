var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Me gusta la manana</div>
    )
  }
});

ReactDOM.render(<Hello />, document.body);