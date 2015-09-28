import React from 'react'
import styles from './my-component.css!'

export default class MyComponent extends React.Component {
  render() {
    return (
      <div className={styles.someComponentClass}>My Component</div>
    )
  }
}
