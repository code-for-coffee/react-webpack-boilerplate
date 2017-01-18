/**
 * Created by jtraver on 1/18/17.
 */
import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
      Hello World!
    </div>
    )
  }
});

const HelloUser = React.createClass({
  render: function () {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
});

//ReactDOM.render(<HelloWorld />, document.getElementById('app'));
ReactDOM.render(<HelloUser name="James"/>, document.getElementById('app'));