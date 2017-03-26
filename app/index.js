var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Some random effing div.</div>
    )
  }
});

ReactDOM.render(<Hello />, document.querySelector('#app'));