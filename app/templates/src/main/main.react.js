import React from 'react';
import MyComponent from '../components/my-component';

class Main extends React.Component {
  render() {
    return (
      <MyComponent>Hello!</MyComponent>
    )
  }
}

React.render(<Main />, document.getElementById('main'));
