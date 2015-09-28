import React from 'react'
import MyComponent from '../components/my-component'
import styles from './main.css!'

class Main extends React.Component {
  render() {
    return (
      <main className={styles.someClass}>
        <MyComponent></MyComponent>
      </main>
    )
  }
}

React.render(<Main />, document.getElementById('main'));
