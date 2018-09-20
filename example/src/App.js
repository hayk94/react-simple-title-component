import React, { Component } from 'react'

import ExampleComponent from 'react-simple-title-component'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent textStyle={{ borderColor: 'red' }}>Yo YO</ExampleComponent>
      </div>
    )
  }
}
